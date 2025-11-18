import PropTypes from "prop-types";
import styles from "./ItemList.module.css";

export default function ItemList({ items, onDelete }) {
    if (!items.length) return <p className={styles.empty}>No items yet.</p>;

    return (
        <div className={styles.grid}>
            {items.map((item) => (
                <div key={item.id} className={styles.card}>
                    <h3>{item.name}</h3>
                    <p>
                        <strong>Price:</strong> ${item.price.toFixed(2)}
                    </p>
                    {item.description && (
                        <p>
                            <strong>Description:</strong> {item.description}
                        </p>
                    )}
                    <button
                        className={styles.deleteBtn}
                        onClick={() => onDelete(item.id)}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}

ItemList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            price: PropTypes.number,
            description: PropTypes.string,
        })
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
};
