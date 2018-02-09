/**
 * Created by michael on 07/02/2018.
 */


import {SET_MENU} from '../utils/types';

export let set_menu_open = (new_state) => {
    return {
        type: SET_MENU,
        payload: new_state
    }
};

export let get_cat = () => {
    return {
        type: "CAT_FETCH_REQUESTED"
    }
};