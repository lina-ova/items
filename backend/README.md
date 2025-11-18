# Product Management API

A simple FastAPI backend for managing products.

## Features
- GET /items → list all products
- GET /items/{id} → get product details
- POST /items → add a new product
- DELETE /items/{id} → delete a product

## Setup
Clone the repo (if not already):
```code
git clone https://github.com/lina-ova/items.git
cd monorepo/backend
```

Create a virtual environment (recommended):
```code
python -m venv .venv
# Activate the environment
source .venv/bin/activate  # Linux/macOS
.venv\Scripts\activate     # Windows
```

Install dependencies:
```code
pip install -r requirements.txt
```
### Running the App locally

Start the development server:
```code
uvicorn app.main:app --reload
```

The API will be available at:
```
http://127.0.0.1:8000
```
