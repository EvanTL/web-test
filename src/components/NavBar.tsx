import React, { useState } from "react";
import logo from "../images/kaleka_logo.png"
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
    const [dropdownStatus, setDropdownStatus] = useState<Boolean>(false)

    const handleDropdown = () => {
        setDropdownStatus(!dropdownStatus)
    }

    return(
        <>
        <div className="h-[103px] max-w-full bg-[#000000] relative z-10">
            <img src={logo} alt="Kaleka logo" className="w-[192px] h-[67px] relative top-5 left-4"/>
            <div className="group relative">
                <button className="relative flex float-right w-fit h-fit bottom-7 right-4 lg:hidden"
                onClick={handleDropdown}>
                    <GiHamburgerMenu className="text-[#F8BE1A] text-3xl"/>
                </button>
                    <ul className={dropdownStatus ? "absolute right-4 top-1 bg-black rounded-md p-2" : "hidden"}>
                        <li className="text-left mb-1"><Link to={'/'} onClick={() => setDropdownStatus(false)} className=" text-[#F8BE1A] font-bold uppercase text-xl">Beranda</Link></li>
                        <li className="text-left mt-1"><Link to={'/about'} onClick={() => setDropdownStatus(false)} className=" text-[#F8BE1A] font-bold uppercase text-xl">Tentang Kami</Link></li>
                    </ul>
            </div>
            <ul className="relative hidden lg:flex lg:justify-center gap-8 bottom-7">
                <li><Link to={'/'} className=" text-[#F8BE1A] font-bold uppercase text-xl">Beranda</Link></li>
                <li><Link to={'/about'} className=" text-[#F8BE1A] font-bold uppercase text-xl">Tentang Kami</Link></li>
            </ul>
        </div>
        </>
    )
}

export default NavBar