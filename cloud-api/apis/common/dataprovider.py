import requests
from apis.dtos.cloud_list_dto import CloudList
from apis.config import PUBLIC_API

async def get_cloud_list() -> CloudList:
    data = requests.get(PUBLIC_API)
    if not data:
        raise Exception(
            f"Cloud list from public api is not served"
        )
    result = data.json()
    return result


