import { useReducer, useState } from "react";
import PropTypes from "prop-types";
import { validateItem } from "../utils/validation";
import styles from "./ItemForm.module.css";

// Reducer to update form state based on input name and value
function formReducer(state, action) {
    return { ...state, [action.name]: action.value };
}

export default function ItemForm({ onAdd }) {
    const [form, dispatch] = useReducer(formReducer, {
        name: "",
        price: "",
        description: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        if (error) setError("");
        dispatch({ name: e.target.name, value: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const err = validateItem(form);
        if (err) return setError(err);

        onAdd({
            name: form.name.trim(),
            price: parseFloat(form.price),
            description: form.description.trim(),
        });

        // Reset form fields
        dispatch({ name: "name", value: "" });
        dispatch({ name: "price", value: "" });
        dispatch({ name: "description", value: "" });
    };

    return (
        <>
            {error && <p className={styles.error}>{error}</p>}

            <form className={styles.toolbar} onSubmit={handleSubmit}>
                <input
                    name="name"
                    type="text"
                    placeholder="Item name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    minLength={1}
                />

                <input
                    name="price"
                    type="number"
                    placeholder="Price"
                    value={form.price}
                    onChange={handleChange}
                    required
                    min="0.01"
                    step="0.01"
                />

                <input
                    name="description"
                    type="text"
                    placeholder="Description (optional)"
                    value={form.description}
                    onChange={handleChange}
                />

                <button type="submit">Add</button>
            </form>
        </>
    );
}

ItemForm.propTypes = {
    onAdd: PropTypes.func.isRequired,
};
