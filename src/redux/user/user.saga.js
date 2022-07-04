import { takeLatest, put, all, call } from "redux-saga/effects";
import { signInFailure, signInSuccess } from "./user.action";
import UserActionTypes from "./user.type";

export function* login() {
    try {
        const res = {
            token: "",
            requestToken: "",
            user: {
                userName: "",
                role: [],
            },
        };
        yield put(signInSuccess(res));
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* onSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, login);
}

export function* userSaga() {
    yield all([call(onSignInStart)]);
}