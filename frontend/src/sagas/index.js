/**
 * Created by michael on 09/02/2018.
 */

import {call, put, takeLatest} from 'redux-saga/effects';
import {get_cat_image} from './api_calls';
import {CAT_IMAGE_REQUESTED, CAT_IMAGE_SUCCESS, CAT_IMAGE_FAIL} from '@/utils/types';


/* Cat Image */
function* cat_image_request() {
    try {
        const cat_image = yield call(get_cat_image);
        if (cat_image.length) {
            yield put({type: CAT_IMAGE_SUCCESS, cat_image: cat_image});
        } else {
            yield put({type: CAT_IMAGE_FAIL});
        }
    } catch (e) {
        console.log(e);
        yield put({type: CAT_IMAGE_FAIL});
    }
}

function* _cat_image_saga() {
    yield takeLatest(CAT_IMAGE_REQUESTED, cat_image_request);
}
/* Cat Image */

export let cat_image_saga = _cat_image_saga;