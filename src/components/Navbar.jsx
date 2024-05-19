import { Link, useLocation } from "react-router-dom"

import { useState } from "react"
import Sidebar from "./Sidebar"

export default function Navbar(){
    const [showSideBar, setShowSidebar] = useState(false)
    const location = useLocation()
    const links = [
        {
            name: "Início",
            path: "/"
        },
        {
            name: "Receitas",
            path: "/Recipes"
        },
        {
            name: "Indico Sabor",
            path: "/Indications"
        },
        {
            name: "Chama o Chef",
            path: "/Support"
        }
    ]

    function CloseSidebar(){
        setShowSidebar(false)
    }

    return(
        <>
            <div className="navbar container">
                <a href="#!" className="logo">Sabor <span>da</span> Gente</a>
                <div className="nav-links">
                    { links.map(link => (
                        <Link className={location.pathname === link.path ? "active" : ""} to={link.path} key={link.name}>{link.name}</Link>
                    ))}
                </div>
                <div onClick={() => setShowSidebar(true)} className={showSideBar ? "sidebar-btn active" : "sidebar-btn"}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            { showSideBar && <Sidebar close={CloseSidebar} links={links}/> }
        </>
    )
}