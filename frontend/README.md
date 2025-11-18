# Product Inventory App

A simple, accessible, and scalable React application for managing a list of products. Add, view, and delete items with ease—each with a name, price, and optional description.

---

## Features

- Add new products with validation:
  - **Name**: 1–50 characters
  - **Price**: Must be greater than 0
  - **Description**: Optional, max 200 characters
- View a list of all products with clean styling
- Delete products from the list
- Form validation with user-friendly error messages
- Accessible markup and keyboard-friendly interactions
- Modular, maintainable code with custom hooks and PropTypes

---

##  Tech Stack

- React (Functional Components + Hooks)
- Axios for API requests
- CSS Modules for scoped styling
- PropTypes for runtime type checking

## Project Structure

```text
frontend/
├─ src/
│  ├─ components/      # Reusable components (e.g., ItemForm, ItemList)
│  ├─ hooks/           # Custom React hooks
│  ├─ api/             # API calls
│  ├─ utils/           # Utility functions (validation)
│  ├─ App.jsx          # Main app component
│  └─ index.jsx        # Entry point
├─ package.json
└─ README.md
```
## Set up

Clone the repository:
```code
git clone https://github.com/lina-ova/items.git
cd frontend
```

Install dependencies:
```code
npm install
```

### Running the App

To start the development server:
```code
npm start dev
```


The app will run on http://localhost:3000 by default.
