import requests
from apis.dtos.cloud_list_dto import CloudList
from apis.config import PUBLIC_API

async def get_cloud_list(current_page, page_size) -> CloudList:
    data = requests.get(PUBLIC_API)
    if not data:
        raise Exception(
            f"Cloud list from public api is not served"
        )
    cloud_list = data.json()
    
    index_of_last_cloud = current_page * page_size;
    index_of_first_cloud = index_of_last_cloud - page_size;
    limited_cloud_list = cloud_list["clouds"][index_of_first_cloud:index_of_last_cloud]
    return {"clouds" : limited_cloud_list}


