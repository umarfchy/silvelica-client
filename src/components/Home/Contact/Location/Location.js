import React from "react";
import GoogleMapReact from "google-map-react";

const Location = () => {
  return (
    <div
      style={{
        height: "17.2em",
        width: "100%",
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyABZsccvt_12Vnf47kY4-yT7gmCyTFUoUo" }}
        defaultCenter={{
          lat: 23.8103,
          lng: 90.4125,
        }}
        defaultZoom={11}
      ></GoogleMapReact>
    </div>
  );
};

export default Location;
