import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
    fetchInitialList,
    // fetchCollectionStartAsync,
} from "../../redux/supplychain-product/supplychain-product.actions";

import "./product-list.styles.scss";
const ProductList = ({ fetchInitialList, currentProducts }) => {
    console.log(currentProducts);
    useEffect(() => {
        fetchInitialList();
    }, [fetchInitialList]);
    return (
        <div className="group">
            <h1>Product List</h1>
        </div>
    );
};

// get current page
const mapStateToProps = (state) => {
    return {
        currentProducts: state.supplyChainProduct.currentProducts,
    };
};

// fetch intial list
const mapDispatchToProps = (dispatch) => {
    return {
        fetchInitialList: () => dispatch(fetchInitialList()),
    };
};

// get all products limit with it with 16 item per page.

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
