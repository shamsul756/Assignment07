import React from "react";
import { Outlet } from "react-router";
const RootLayout=()=>{

    return(
     <div>
        {/* fixed */}
       
        {/* dynamic */}
        <Outlet/>
        {/* fixed */}
       
     </div>
    )
}
export default RootLayout;