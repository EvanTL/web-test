import React, { useContext, useState } from "react";
import { LatLngLiteral } from "leaflet";

const CoordinateContext = React.createContext<any>({})

export const CoordinateProvider = ({children}: any) => {

    /*
        Declaring state to be used for passing coordinate data from home page to detail page.
        I set the default value to be an object with latitude and longitude of 0 following latlng literal type
        in order to avoid error in case user accessed detail page immediately, before passing coordinates data.
    */
    const [singleCoordinate, setSingleCoordinate] = useState<LatLngLiteral | null>({
        lat: 0,
        lng: 0
    })

    return(
        <CoordinateContext.Provider
        value={
            {
                singleCoordinate,
                setSingleCoordinate
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