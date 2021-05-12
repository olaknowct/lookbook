import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import supplyChainProductReducer from "./supplychain-product/supplychain-product.reducer";

const rootReducer = combineReducers({
    user: userReducer,
    supplyChainProduct: supplyChainProductReducer,
});

export default rootReducer;
