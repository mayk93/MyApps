from rest_framework import status
from rest_framework.decorators import api_view

from django.http import HttpResponse
from django.conf import settings

import requests

cat_api_url = settings.CAT_API_URL


@api_view(['GET'])
def cat_api(request):
    """
    Get a image from the cat API and return the image.
    """

    data = b""

    try:
        response = requests.get(cat_api_url, stream=True)
        response.raise_for_status()

        for block in response.iter_content():
            data += block

        response_status = status.HTTP_200_OK
    except Exception as e:
        print(e)
        response_status = status.HTTP_400_BAD_REQUEST

    return HttpResponse(
        data, content_type='image/jpg', status=response_status
    )
