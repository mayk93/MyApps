/**
 * Created by michael on 09/02/2018.
 */

import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions

function api_call() {
    let x = setTimeout(() => {
        console.log("This is the end")
    }, 3000)
    console.log(x)
}

function* request_cat(action) {
   try {
      const user = yield call(api_call);
      yield put({type: "CAT_FETCH_SUCCEEDED", user: user});
   } catch (e) {
      yield put({type: "CAT_FETCH_FAILED", message: e.message});
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/


/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* test_saga() {
  yield takeLatest("CAT_FETCH_REQUESTED", request_cat);
}

export default test_saga;