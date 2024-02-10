import React from "react";
import Banner from "../components/Banner";
import HomeMap from "../components/HomeMap";

const HomePage = () => {
    return(
        <>
        <Banner title={null}/>
        <div className="relative top-[50px] h-[525px]">
            <HomeMap/>
        </div>
        </>
    )
}

export default HomePage