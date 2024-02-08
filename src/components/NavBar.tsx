import React from "react";
import logo from "../images/kaleka_logo.png"
import banner from "../images/kaleka_copyright.jpg"
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <>
        <div className="h-[103px] max-w-full bg-[#000000] relative z-10">
            <img src={logo} className="w-[192px] h-[67px] relative top-5 left-4"/>
            <ul className="relative lg:flex lg:justify-center gap-8 bottom-7">
                <li><Link to={'/'} className=" text-[#F8BE1A] font-bold uppercase text-xl">Beranda</Link></li>
                <li><Link to={'/about'} className=" text-[#F8BE1A] font-bold uppercase text-xl">Tentang Kami</Link></li>
            </ul>
        </div>
        <div className="absolute top-0 bg-no-repeat w-full">
            <img src={banner} alt="kaleka copyright" className="h-96 lg:h-full lg:object-cover"/>
        </div>
        </>
    )
}

export default NavBar