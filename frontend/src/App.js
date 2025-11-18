import React from "react";
import useItems from "./hooks/useItems";
import ItemList from "./components/ItemList";
import ItemForm from "./components/ItemForm";
import Loading from "./components/Loading";
import styles from "./App.module.css";

export default function App() {
  const { items, error, loading, addItem, removeItem } = useItems();

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>My Items</h1>

      {error && <p className={styles.error}>{error}</p>}

      <ItemForm onAdd={addItem} />

      {loading ? (
        <Loading />
      ) : (
        <ItemList items={items} onDelete={removeItem} />
      )}
    </main>
  );
}
