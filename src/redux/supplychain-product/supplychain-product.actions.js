import SupplyChainProductActionTypes from "./supplychain-product.types";

export const fetchInitialList = () => {
    return {
        type: SupplyChainProductActionTypes.SET_CURRENT_PRODUCTS,
    };
};
