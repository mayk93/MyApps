from rest_framework import status
from rest_framework.decorators import api_view

from django.http import JsonResponse, HttpResponse
from django.conf import settings

import requests
import json
import base64

cat_api_url = settings.CAT_API_URL


@api_view(['GET'])
def cat_api(request):
    """
    Get a image from the cat API and return the URL.
    """

    print("cat_api called 0")

    json_response = {"data": ""}

    try:
        response = requests.get(cat_api_url)

        # try:
        #     print("cat_api called 1")
        #     base64_bytes = b64encode(response.text)
        #     print("cat_api called 2")
        #     base64_string = base64_bytes.decode('utf-8')
        #     print("cat_api called 3")
        # except Exception as e:
        #     print(e)
        #     base64_string = response.text

        print(response.text)
        raise Exception

        data = base64.b64encode(bytes(response.text, 'utf-8'))
        data = data.decode('utf-8')

        json_response["data"] = data

        response_status = status.HTTP_200_OK
    except Exception as e:
        print(e)
        response_status = status.HTTP_400_BAD_REQUEST

    return JsonResponse(json_response, status=response_status)
