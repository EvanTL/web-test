import React from "react";
import banner from "../images/kaleka_copyright.jpg"

const Banner = ({title}: {title: string | null}) => {
    return(
    <>
        <div className="w-full h-fit">
            <img src={banner} alt="kaleka copyright" className="z-0 h-[211px] object-cover w-full"/>
            <h1 className="uppercase text-white text-[32px] font-bold absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 z-10">{title}</h1>
        </div>
    </>
    )
}

export default Banner