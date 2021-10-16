from fastapi.testclient import TestClient
from unittest import mock

from apis.main import app

client = TestClient(app)

def test_cloud_list():
    response = client.get("/v1/cloud/list")
    assert response.status_code == 200
    assert response.json() == {"Hello": "World"}