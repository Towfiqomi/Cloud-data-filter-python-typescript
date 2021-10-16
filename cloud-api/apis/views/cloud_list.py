from fastapi import APIRouter

router = APIRouter()

@router.get("/cloud/list")
def hello_world():
    return {"Hello": "World"}