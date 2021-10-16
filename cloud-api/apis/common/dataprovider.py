import requests
import asyncio
import json
from apis.dtos.cloud_list_dto import CloudList
from apis.config import PUBLICT_API

async def get_cloud_list() -> CloudList:
    data = requests.get(PUBLICT_API)
    result = data.json()
    return result


