import React from 'react';

export default (props) => {

  componentDidMount() {
    new google.maps.Map(refs.map, {
      zoom: 12,
      center: {
        lat: props.lat,
        lng: props.lon
      }
    });
  }

  return (
    <div ref="map" />
  );
}
