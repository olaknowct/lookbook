import SupplyChainProductActionTypes from "./supplychain-product.types";

const INITIAL_STATE = {
    currentProducts: null,
};

// current sstate
const supplyChainProductReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SupplyChainProductActionTypes.SET_CURRENT_PRODUCTS:
            console.log("tadacr");
        // return {
        //     ...state,
        //     currentUser: action.payload,
        // };

        default:
            return state;
    }
};

export default supplyChainProductReducer;
