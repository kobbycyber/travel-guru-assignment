import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const MapGoogle = () => {
  const google = window.google;
const data = this.props.data;
const center = this.props.center;
  return (
    <div>
      <Map google={this.props.google} zoom={10}>

        <Marker onClick={this.onMarkerClick}
          name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    </div>
  );
};


export default GoogleApiWrapper({
  apiKey: ("AIzaSyDy6MTf2nF4ScVrw1ekqNR-SMyWgzutBvA")
})(MapGoogle)