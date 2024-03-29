import React, { useEffect, useState } from "react";
import { Circle, MapContainer, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import axios from "axios";
import { Link } from "react-router-dom";
import { useCoordinateContext } from "../context/CoordinateContext";

function HomeMap() {

    //Using state to house data fetched from API
    const [coordinates, setCoordinates] = useState([])

    //Using context to pass data to detail page
    const {setSingleCoordinate, singleCoordinate, centerlatlng} = useCoordinateContext()

    /* Fetches data from API for coordinates
    * wrapped in useEffect() with empty dependency array to prevent
    * unnecessary calls, by having it run only on initial render.
    * 
    * I also destructed key 'data' because I fetched with axios and there are other keys in the response data,
    * using setState to pass response data outside axios scope
    */
    useEffect(() => {
        axios.get(`https://run.mocky.io/v3/07e88d94-b1de-4e13-89c3-1851cc16019b`)
        .then(res => {
            const {data} = res
            setCoordinates(data.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    console.log(singleCoordinate) //Using console.log to verify initial value and that data is passed correctly from click event
    
    return(
        <>
            <div className="h-[277px] mx-5 lg:h-[477px] lg:flex lg:justify-center">
            <MapContainer center={[centerlatlng.lat, centerlatlng.lng]} zoom={5} 
            className="object-contain h-full lg:w-[1024px] align-middle">
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* 
            Rendering map circles.
            I used conditional to prevent errors that may arise from coordinates not being fetched
             */}
            {
                coordinates.length > 0 && coordinates.map((data: any) => {
                    return(
                        <>
                        <Circle center={[data.coordinates[1], data.coordinates[0]]} radius={50000} key={data.index} 
                        eventHandlers={{
                                click: () => {
                                    setSingleCoordinate({
                                        lat: data.coordinates[1],
                                        lng: data.coordinates[0]
                                    })
                                }
                            }}>
                            <Popup>
                                <Link to={'/detail'} className="uppercase font-semibold">Lihat detail</Link>
                            </Popup>
                        </Circle>
                        </>
                    )
                })
            }
            </MapContainer>
            </div>
        </>
    )
}

export default HomeMap