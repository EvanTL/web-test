import React, { useContext, useState } from "react";
import { LatLngLiteral } from "leaflet";

const CoordinateContext = React.createContext<any>({})

export const CoordinateProvider = ({children}: any) => {

    //Starting coordinates when rendering map on home and coordinate detail
    const centerlatlng: LatLngLiteral = {
        lat: -5.551,
        lng: 114.60
    }

    /*
        Declaring state to be used for passing coordinate data from home page to detail page.
        I set the default value of latitude and longitude to 0 in order to avoid error in case 
        user accessed detail page immediately, before passing coordinates data.
    */

    const [singleCoordinate, setSingleCoordinate] = useState<LatLngLiteral>({
        lat: 0,
        lng: 0
    })

    return(
        <CoordinateContext.Provider
        value={
            {
                singleCoordinate,
                setSingleCoordinate,
                centerlatlng
            }
        }>
            {children}
        </CoordinateContext.Provider>
    )
}

//Exporting context so it can be used
export const useCoordinateContext = () => {
    return useContext(CoordinateContext)
}