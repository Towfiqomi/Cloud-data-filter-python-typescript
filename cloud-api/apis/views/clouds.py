from fastapi import APIRouter

router = APIRouter()

@router.get("/clouds")
def hello_world():
    return {"Hello": "World"}