import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Map extends Component {
  
  componentDidMount() {
    this.loadMap();
    console.log(this.props);
  }

  loadMap(){
    if(this.props && this.props.google) {
      //google is available
      console.log("google is here")
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      let zoom = 14;
      let lat = 37.774929;
      let lng = -122.419;
      const center = new maps.LatLng(lat, lng)
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
      this.map = new maps.Map(node, mapConfig);
    }
    else {
      console.log("google is not here")
    }
  }

  render() {
    return (
      <div ref='map'>
        Loading map...
      </div>
    )
  }
}

export default Map;
