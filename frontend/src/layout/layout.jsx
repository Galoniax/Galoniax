import React from "react";
import { Navbar } from "../layout/navbar/navbar.jsx";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default Layout;