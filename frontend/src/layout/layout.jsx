import React from "react";
import { Navbar } from "../layout/navbar/navbar.jsx";
import { Footer } from "./footer/Footer.jsx";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default Layout;