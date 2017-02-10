import React, { Component } from 'react';
import {Map, InfoWindow, GoogleApiWrapper} from 'google-maps-react';
import Rebase from 're-base';
import Marker from './Marker';
import config from './lib/config';
import { sortMapData } from './helpers/pickMapData';

const base = Rebase.createClass(config);
const style = {
  width: '100%',
  height: '100%'
}

export class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      isLoading: false,
      data: [],
    }

    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    this.setState({ isLoading: true });
    base.fetch('vendors', {
      context: this,
      asArray: true,
    }).then((data) => {
      const usableData = sortMapData(data);
      this.setState({
        data: usableData,
        isLoading: false,
      });
    }).catch(() => {
      this.setState({ isLoading: false });
    });
  }

  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
  }

  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  render() {
    return (
      <div>
        <br/>
        <Map
          google={this.props.google}
          style={style}
          initialCenter={{
            lat: 40.454785,
            lng: -80.021807
          }}
          zoom={15}
          onClick={this.onMapClicked}
        >
        {this.state.data.map(vendor => (
            <Marker
              name={vendor.vndrName}
              description={vendor.description}
              position={{lat: vendor.latitude, lng: vendor.longitude}}
              onClick={this.onMarkerClick}
            />
        ))}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
            <div>
              <h2>{this.state.selectedPlace.name}</h2>
              <p>{this.state.selectedPlace.description}</p>
            </div>
          </InfoWindow>

        </Map>
        <br/>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_MAP_KEY
})(MapView)
