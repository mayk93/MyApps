/**
 * Created by michael on 11/02/2018.
 */

import {server_url, cat_route} from '@/constants';

let cat_image_fetch_options = {
    headers: new Headers({
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    })
};

let cat_url = `${server_url}/${cat_route}`;

export let get_cat_image = () => {
    console.log(cat_url);
    return fetch(cat_url, cat_image_fetch_options).then((response) => {
        console.log("Image response: ", response);
        return response.json();
    }).then((cat_image_json) => {
        console.log("Image result: ", cat_image_json);
        console.log("Image result data: ", cat_image_json.data);
        return cat_image_json.data;
    })
};