/**
 * Created by michael on 11/02/2018.
 */

import {server_url, cat_route} from '@/constants';

let cat_image_fetch_options = {
    headers: new Headers({})
};

let cat_url = `${server_url}/${cat_route}`;

export let get_cat_image = () => {
    console.log(cat_url);
    return fetch(cat_url, cat_image_fetch_options).then((cat_image_response) => {
        return cat_image_response.arrayBuffer()
    }).then((cat_image_buffer) => {
        return cat_image_buffer
    }).then((cat_image_data) => {
        let array = new Uint8Array(cat_image_data)
        console.log("array: ", array);
        return String.fromCharCode.apply(null, array);
    }).then((x) => {
        // console.log(x)
        let b64=btoa(x);
        console.log("data:image/jpeg;base64,"+b64)
        return "data:image/jpeg;base64,"+b64;
    });
};