/**
 * Created by michael on 07/02/2018.
 */


import {SET_MENU, CAT_IMAGE_REQUESTED, CAT_IMAGE_RESET} from '../utils/types';

export let set_menu_open = (new_state) => {
    return {
        type: SET_MENU,
        payload: new_state
    }
};


export let get_cat_image = () => {
    console.log("get_cat_image");
    return {
        type: CAT_IMAGE_REQUESTED
    }
};

export let set_cat_image = (state) => {
    console.log("set_cat_image");
    return {
        type: CAT_IMAGE_RESET,
        cat_image: state
    }
};