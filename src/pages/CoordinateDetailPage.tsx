import React from "react";
import CoordinateDetails from "../components/CoordinateDetails";
import Banner from "../components/Banner";

const CoordinateDetailsPage = () => {
    return(
        <>
        <Banner title="Detail Coordinate"/>
        <div className="relative top-[50px] h-[600px]">
            <CoordinateDetails {...{lat: -5.551, lng: 114.60}}/>
        </div>
        </>
    )
}

export default CoordinateDetailsPage