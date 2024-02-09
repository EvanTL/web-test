import React from "react";
import { Circle, MapContainer, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import { useCoordinateContext } from "../context/CoordinateContext";
import { Link } from "react-router-dom";
import { LatLngLiteral } from "leaflet";

const CoordinateDetails = (props: LatLngLiteral) => {
    //Importing state used to pass coordinate
    const {singleCoordinate} = useCoordinateContext()

    //Using console.log to verify that data is passed correctly from HomePage(Beranda)
    console.log(singleCoordinate)

    return(
        <>
        <div className="h-[477px] lg:flex lg:justify-center">
        <MapContainer center={[props.lat, props.lng]} zoom={5}
        className="object-contain h-[477px] lg:w-[1024px] align-middle">
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
        </>
    )
}

export default CoordinateDetails