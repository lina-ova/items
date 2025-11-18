import { useState, useEffect } from 'react';
import { getItems, createItem, deleteItem } from '../api/items';

export default function useItems() {
    const [items, setItems] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const loadItems = async () => {
        try {
            const data = await getItems();
            setItems(data);
        } catch {
            setError('Could not load items.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadItems();
    }, []);

    const addItem = async (item) => {
        try {
            const newItem = await createItem(item);
            setItems([...items, newItem]);
        } catch {
            setError('Could not add item.');
        }
    };

    const removeItem = async (id) => {
        try {
            await deleteItem(id);
            setItems(items.filter(i => i.id !== id));
        } catch {
            setError('Could not delete item.');
        }
    };

    return { items, error, loading, addItem, removeItem };
}

