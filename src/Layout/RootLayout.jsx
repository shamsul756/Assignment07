import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";
import FriendCard from "../Pages/FriendCard";
import TotalCard from "../Pages/totalCard";
const RootLayout = () => {

    return (
        <div>
            {/* fixed */}
            <Navbar />
            <FriendCard />
            
            {/* dynamic */}
            <Outlet />
            
            {/* fixed */}

            <Footer />

        </div>
    )
}
export default RootLayout;