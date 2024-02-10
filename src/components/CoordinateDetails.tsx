import React from "react";
import { Circle, MapContainer, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import { useCoordinateContext } from "../context/CoordinateContext";
import { Link } from "react-router-dom";

const CoordinateDetails = () => {
    //Importing state used to pass coordinate and center lat lng for map center
    const {singleCoordinate, centerlatlng} = useCoordinateContext()

    //Using console.log to verify that data is passed correctly from HomePage(Beranda)
    console.log(singleCoordinate)

    return(
        <div className="mx-5">
        <div className="h-[277px] lg:h-[477px] lg:flex lg:justify-center">
        <MapContainer center={[centerlatlng.lat, centerlatlng.lng]} zoom={5}
        className="object-contain h-full lg:w-[1024px] align-middle">
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Circle center={[singleCoordinate.lat, singleCoordinate.lng]} radius={50000}>
                <Popup>
                    <Link to={'/detail'} className="uppercase font-semibold">Lihat detail</Link>
                </Popup>
            </Circle>
        </MapContainer>
        </div>
        <h1 className="text-xl font-bold mt-4">Coordinates Details: {singleCoordinate.lng}, {singleCoordinate.lat}</h1>
        </div>
    )
}

export default CoordinateDetails