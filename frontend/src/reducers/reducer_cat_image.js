/**
 * Created by michael on 11/02/2018.
 */

import {CAT_IMAGE_REQUESTED, CAT_IMAGE_SUCCESS, CAT_IMAGE_FAIL, CAT_IMAGE_RESET} from '../utils/types';
import {loading, failed, no_action} from '@/constants';


export default function (state=no_action, action) {
    switch (action.type) {
        case CAT_IMAGE_REQUESTED:
            return loading;
        case CAT_IMAGE_SUCCESS:
            return action.cat_image;
        case CAT_IMAGE_FAIL:
            return failed;
        case CAT_IMAGE_RESET:
            return action.cat_image;
        default:
            return no_action;
    }
}