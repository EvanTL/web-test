import React from "react";
import SimpleMap from "../components/simpleMap";

const HomePage = () => {
    return(
        <>
        <SimpleMap {...{lat: -5.551, lng: 114.60}}/>
        </>
    )
}

export default HomePage