import React from 'react';
import GoogleMapReact from 'google-maps-react';

const MapGoogle = () => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDy6MTf2nF4ScVrw1ekqNR-SMyWgzutBvA" }}
          defaultCenter={{lat: 23.684994,
            lng: 90.356331}}
          defaultZoom={10}
        >
          {/* <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          /> */}
        </GoogleMapReact>
      </div>
  );
};

export default MapGoogle;