from http import HTTPStatus
from fastapi import HTTPException

class APIException(Exception):
    pass

class EmptyCloudDataList(APIException):
    pass
