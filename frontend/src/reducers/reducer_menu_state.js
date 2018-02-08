/**
 * Created by michael on 07/02/2018.
 */

import {SET_MENU} from '../utils/types';


export default function (state=false, action) {
    switch (action.type) {
        case SET_MENU:
            return action.payload;
        default:

            return state;
    }
}