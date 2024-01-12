
import SideNav from "../ui/dashboard/sidenav";
import React from "react";

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <div className="flex">
            <div>
                <SideNav/>
            </div>
            {children}
        </div>
    )
}