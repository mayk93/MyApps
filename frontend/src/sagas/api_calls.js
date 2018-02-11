/**
 * Created by michael on 11/02/2018.
 */

import {cat_url} from '@/constants';

let fetch_options = {
    headers: new Headers({
        "Access-Control-Allow-Origin": "thecatapi.com",
        "Content-Type": "application/json"
    }),
    credentials: "include",
    mode: "cors",
    redirect: "follow"
};

// ToDo: Change this to hit own API server
export let get_cat_image = () => {
    return "http";

    // return fetch(cat_url, fetch_options).then(function (response) {
    //     console.log("Image response: ", response);
    //     return response.json();
    // }).then(function (cat_image) {
    //     console.log("Image result: ", cat_image);
    //     return cat_image
    // });
};