import React, { useEffect, useState } from "react";
import { Circle, MapContainer, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import type { LatLngLiteral } from "leaflet";
import axios from "axios";
import { Link } from "react-router-dom";

function SimpleMap(props: LatLngLiteral) {

    //Using state to house data fetched from API
    const [coordinates, setCoordinates] = useState([])

    /* Fetches data from API for coordinates
    * wrapped in useEffect() with empty dependency array to prevent
    * unnecessary calls, by having it run only on initial render.
    * 
    * I also destructed key 'data' because I fetched with axios and there are other keys in the response data
    */
    useEffect(() => {
        axios.get(`https://run.mocky.io/v3/07e88d94-b1de-4e13-89c3-1851cc16019b`)
        .then(res => {
            const {data} = res
            setCoordinates(data.data)
        })
        .catch(err => console.log(err))
    }, [])

    const coordetail = () => {
        
    }
    
    return(
        <>
        <div className="relative bg-white top-[314px] h-[600px]">
            <div className="relative top-[50px]">
            <MapContainer center={[props.lat, props.lng]} zoom={5} style={{height: "477px", width: "828px", left: "380px"}}>
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
                        <Circle center={[data.coordinates[1], data.coordinates[0]]} radius={50000} key={data.index}>
                            <Popup>
                                <Link to={'/'}>See detail</Link>
                            </Popup>
                        </Circle>
                        </>
                    )
                })
            }
            </MapContainer>
            </div>
        </div>
        </>
    )
}

export default SimpleMap