export function validateItem({ name, price, description }) {
    const trimmedName = name.trim();
    const trimmedDesc = description.trim();
    const priceValue = parseFloat(price);

    if (trimmedName.length < 1 || trimmedName.length > 50) {
        return 'Name must be between 1 and 50 characters.';
    }

    if (isNaN(priceValue) || priceValue <= 0) {
        return 'Price must be a number greater than zero.';
    }

    if (trimmedDesc && trimmedDesc.length > 200) {
        return 'Description must be less than 200 characters.';
    }

    return '';
}
