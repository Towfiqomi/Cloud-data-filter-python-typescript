import requests
import asyncio
import json
from apis.dtos.cloud_list_dto import CloudList
from apis.common import exceptions
from apis.config import PUBLICT_API

async def get_cloud_list() -> CloudList:
    data = requests.get(PUBLICT_API)
    if not data:
        raise exceptions.EmptyCloudDataList(f"Cloud list from public api is not served")
    result = data.json()
    return result


