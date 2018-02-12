from rest_framework import status
from rest_framework.decorators import api_view

from django.http import JsonResponse, HttpResponse, FileResponse
from django.conf import settings

import requests
import json
import base64

cat_api_url = settings.CAT_API_URL

test = '''
<img src="data:image/jpg;base64,%s"></img>
'''.strip()

@api_view(['GET'])
def cat_api(request):
    """
    Get a image from the cat API and return the URL.
    """

    print("cat_api called 0")

    data = b""
    json_response = {"data": ""}

    try:
        # response = requests.get(cat_api_url)

        # try:
        #     print("cat_api called 1")
        #     base64_bytes = b64encode(response.text)
        #     print("cat_api called 2")
        #     base64_string = base64_bytes.decode('utf-8')
        #     print("cat_api called 3")
        # except Exception as e:
        #     print(e)
        #     base64_string = response.text

        # data = base64.b64encode(bytes(response.text, 'utf-8'))
        # data = data.decode('utf-8')
        #
        # json_response["data"] = data

        response = requests.get(cat_api_url, stream=True)
        response.raise_for_status()

        for block in response.iter_content():
            data += block

        # with open('/Users/michael/Desktop/output.jpg', 'wb') as handle:
        #     for block in response.iter_content(1024):
        #         # handle.write(block)
        #         data += block

        # with open("/Users/michael/Desktop/img2.jpg", "wb+") as dest:
        #     dest.write(bytes(response.text, 'utf-8'))
        #     print("Wrote")

        # print("cat_api called 1")

        response_status = status.HTTP_200_OK
        # json_response["data"] = data

        # print(data)
    except Exception as e:
        print(e)
        response_status = status.HTTP_400_BAD_REQUEST

    # return JsonResponse(json_response, status=response_status)
    # return FileResponse(data, content_type='image/jpeg', status=response_status)

    print(data)

    with open("/Users/michael/Desktop/img2.jpg", "wb+") as dest:
        dest.write(data)

    # print(base64.b64decode(data))
    # base64.b64decode(data)
    return HttpResponse(
        data, content_type='image/jpg', status=response_status
    )
