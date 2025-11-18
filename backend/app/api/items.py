import logging
from fastapi import APIRouter, HTTPException
from app.models.item import ItemIn, ItemOut
from threading import Lock
import html

lock = Lock()
router = APIRouter(prefix="/items", tags=["items"])
logger = logging.getLogger(__name__)

items = {}
next_id = 1

def sanitize_item(item: ItemIn) -> dict:
    return {
        "name": html.escape(item.name),
        "description": html.escape(item.description) if item.description else None,
        "price": item.price
    }

@router.get("", response_model=list[ItemOut], summary="Get all items")
def get_items():
    return [ItemOut(**item) for item in items.values()]

@router.get("/{item_id}", response_model=ItemOut, summary="Get item by ID")
def get_item(item_id: int):
    item = items.get(item_id)
    if not item:
        raise HTTPException(status_code=404, detail="Item not found")
    return ItemOut(**item)

@router.post("", response_model=ItemOut, summary="Create a new item")
def create_item(item_in: ItemIn):
    global next_id
    with lock:  # only one request can run this block at a time
        item_dict = sanitize_item(item_in)
        item_dict["id"] = next_id
        items[next_id] = item_dict
        next_id += 1
        logger.info(f"Item created: {item_dict}")

    return ItemOut(**item_dict)


@router.delete("/{item_id}", response_model=ItemOut, summary="Delete an item")
def delete_item(item_id: int):
    with lock:
        item = items.pop(item_id, None)
    if not item:
        logger.warning(f"Attempted to delete non-existent item {item_id}")
        raise HTTPException(status_code=404, detail="Item not found")
    logger.info(f"Item deleted: {item}")
    return ItemOut(**item)