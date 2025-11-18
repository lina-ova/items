from pydantic_settings import BaseSettings
from typing import List

class Settings(BaseSettings):
    app_name: str = "Product Management API"
    debug: bool = True
    version: str = "v1"
    secret_key: str = "change_this_in_production"
    allowed_origins: List[str] = ["http://localhost:3000"]

    class Config:
        env_file = ".env"

settings = Settings()
