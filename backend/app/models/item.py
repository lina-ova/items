from pydantic import BaseModel, Field

# Input schema: what clients send when creating an item
class ItemIn(BaseModel):
    name: str = Field(..., min_length=1, max_length=50)
    price: float = Field(..., gt=0)  # must be strictly greater than 0
    description: str | None = Field(None, max_length=200)

# Output schema: what the API returns
class ItemOut(BaseModel):
    id: int
    name: str
    price: float
    description: str | None = None

    class Config:
        from_attributes = True
