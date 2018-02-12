/**
 * Created by michael on 11/02/2018.
 */

import {server_url, cat_route} from '@/constants';

let cat_url = `${server_url}/${cat_route}`;

let cat_image_fetch_options = {
    headers: new Headers({})
};

export let get_cat_image = () => {
    // console.log(cat_url);
    return fetch(cat_url, cat_image_fetch_options).then((cat_image_response) => {
        // console.log("cat_image_response: ", cat_image_response);
        return cat_image_response.arrayBuffer()
    }).then((cat_image_buffer) => {
        // console.log("cat_image_buffer: ", cat_image_buffer);
        return new Uint8Array(cat_image_buffer);
    }).then((cat_image_array) => {
        // console.log("cat_image_array: ", cat_image_array);
        return String.fromCharCode.apply(null, cat_image_array);
    }).then((cat_image_string) => {
        // console.log("cat_image_string: ", cat_image_string);
        let cat_image_string_base_64 = btoa(cat_image_string);
        return `data:image/jpeg;base64,${cat_image_string_base_64}`
    });
};