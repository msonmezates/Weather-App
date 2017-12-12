/* eslint-disable no-undef */ //this line removes google is not defined error!

import React, { Component } from 'react';

export default class GoogleMap extends Component {

  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat, //latitude
        lng: this.props.lon  //longitude
      }
    });
  }

  render() {
    return (
      <div ref="map" />
    );
  }
}
