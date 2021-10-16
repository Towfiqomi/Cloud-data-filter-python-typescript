from fastapi import FastAPI
from pydantic import BaseModel

from apis import config


def application_details() -> FastAPI:
    application = FastAPI(
        title=config.API_NAME,
        description=config.API_DESCRIPTION,
        version=config.API_VERSION,
    )
    return application

app = application_details()


@app.get("/")
def hello_world():
    return {"Hello": "World"}
