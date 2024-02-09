import React from "react";
import { LatLngLiteral } from "leaflet";

const CoordinateContext = React.createContext<LatLngLiteral | null>(null)