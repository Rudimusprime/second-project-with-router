import React from 'react';
import {Route, Routes} from 'react-router-dom';

import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import ContactPage from "../pages/ContactPage";
import AdminPage from "../pages/AdminPage";
import ErrorPage from "../pages/ErrorPage";

const Page = () => {
    return (
        <>
            <Routes>
                <Route path="/"
                       exact
                       element={<HomePage/>}/>
                <Route path="/products"
                       element={<ProductPage/>}/>
                <Route path="/contact"
                       element={<ContactPage/>}/>
                <Route path="/admin"
                       element={<AdminPage/>}/>
                <Route path="*"
                       element={<ErrorPage/>}/>
            </Routes>
        </>
    );
}

export default Page;