# Product Management API

A simple FastAPI backend for managing products.

## Features
- GET /items → list all products
- GET /items/{id} → get product details
- POST /items → add a new product
- DELETE /items/{id} → delete a product

## Setup
```bash
pip install -r requirements.txt
uvicorn app.main:app --reload
