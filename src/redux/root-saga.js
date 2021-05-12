// issue and call all sagas
import { all, call } from "redux-saga/effects";

import { supplyChainProductSagas } from "./supplychain-product/supplychain-product.sagas";

export default function* rootSaga() {
    // initialize concurently, like takes every
    yield all([call(supplyChainProductSagas)]);
}
