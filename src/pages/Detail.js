import React from "react";
import importData from "../small_biz_data.js";
import { LoadScript } from "@react-google-maps/api";
import Maps from "../components/Maps.js";

export default function Detail() {
  return (
    <div>
      <LoadScript googleMapsApiKey="AIzaSyCJcaWh6K9_P0Ey23amRDsuT7_zRo7vy9w">
        {importData.map((item) => (
          <div>
            <h1>{item.name}</h1>
            <Maps item={item} />
          </div>
        ))}
      </LoadScript>
    </div>
  );
}
