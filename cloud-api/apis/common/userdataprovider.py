import requests
from apis.dtos import user_dtos
from apis.config import USER_INFO_CLIENT


async def get_user_location_data() -> user_dtos.UserLocationData:
    URL = USER_INFO_CLIENT
    r = requests.get(URL)
    data: user_dtos.UserLocationData = r.json()
    return data
