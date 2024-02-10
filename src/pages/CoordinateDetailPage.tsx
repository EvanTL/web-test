import React from "react";
import CoordinateDetails from "../components/CoordinateDetails";
import Banner from "../components/Banner";
import NavBar from "../components/NavBar";

const CoordinateDetailsPage = () => {
    return(
        <>
        <NavBar/>
        <Banner title="Detail Coordinate"/>
        <div className="relative top-[50px] h-[535px]">
            <CoordinateDetails/>
        </div>
        </>
    )
}

export default CoordinateDetailsPage