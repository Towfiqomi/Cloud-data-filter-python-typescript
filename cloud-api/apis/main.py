from fastapi import FastAPI
from pydantic import BaseModel
from starlette.exceptions import HTTPException as StarletteHTTPException
from starlette.middleware.cors import CORSMiddleware
from fastapi.responses import PlainTextResponse

from apis import config, routes


def get_origins():
    origins = [config.APP_DOMAIN]
    return origins


def application_details() -> FastAPI:
    application = FastAPI(
        title=config.API_NAME,
        description=config.API_DESCRIPTION,
        version=config.API_VERSION,
    )
    application.include_router(routes.router, prefix=config.API_ROUTE_PREFIX)
    application.add_middleware(
        CORSMiddleware,
        allow_origins=get_origins(),
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
    return application


app = application_details()


@app.exception_handler(StarletteHTTPException)
async def http_exception_handler(request, exc):
    return PlainTextResponse(str(exc.detail), status_code=exc.status_code)
