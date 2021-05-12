import React from "react";
import SignUpPage from "./pages/sign-up/sign-up.component";

import FilterProduct from "./components/filter-product/filter-product.component";
import ProductList from "./components/product-list/product-list.component";
import PaginateButton from "./components/paginate-button/paginate-button.component";

import "./App.css";

const App = () => {
    return (
        <div className="app">
            <FilterProduct></FilterProduct>
            <ProductList></ProductList>
            <PaginateButton></PaginateButton>
        </div>
    );
};

export default App;
