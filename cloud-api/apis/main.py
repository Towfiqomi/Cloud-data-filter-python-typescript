from fastapi import FastAPI
from pydantic import BaseModel

router = FastAPI()


@router.get("/")
def hello_world():
    return {"Hello": "World"}
