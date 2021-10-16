from fastapi import FastAPI
from pydantic import BaseModel

from apis import config, routes


def application_details() -> FastAPI:
    application = FastAPI(
        title=config.API_NAME,
        description=config.API_DESCRIPTION,
        version=config.API_VERSION,
    )
    application.include_router(routes.router, prefix=config.API_ROUTE_PREFIX)
    return application

app = application_details()
