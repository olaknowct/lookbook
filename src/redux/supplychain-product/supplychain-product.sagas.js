import { takeLatest, put, all, call } from "redux-saga/effects";
import axios from "axios";
import SupplyChainProductActionTypes from "./supplychain-product.types";

// import { signUpSuccess, verifyFailed, verifyAccount } from "./user.actions";

const INITIAL_PARAMS = {
    page: 1,
    limit: 16,
};

export function* getInitialProducts({ payload = INITIAL_PARAMS }) {
    // try {
    yield console.log("i am here asaga");
    // const response = yield axios({
    //     url: "verify",
    //     method: "GET",
    // });

    // const {
    //     data: { data: res },
    // } = response;

    // // console.log(res);
    // if (res.status === "fail") {
    //     yield put(verifyFailed("Verified Failed, Account not Registered "));
    // }

    // if (res.status === "success") {
    //     yield put(verifyAccount(res.data));
    // }
    // } catch (error) {
    // alert("Error Occur");
    // }
}

export function* fetchInitialProducts() {
    yield takeLatest(
        SupplyChainProductActionTypes.SET_CURRENT_PRODUCTS,
        getInitialProducts
    );
}

// initialize sagas
export function* supplyChainProductSagas() {
    yield all([call(fetchInitialProducts)]);
}
