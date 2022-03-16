import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

function Location({ cen }) {
  return (
    <LoadScript googleMapsApiKey="AIzaSyDQVcmwGa5ERWtlEooq8amLGpqTbCbRzE4">
      <GoogleMap mapContainerStyle={containerStyle} center={cen} zoom={10}>
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
}
export default Location;
