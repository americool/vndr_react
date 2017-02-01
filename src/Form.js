import React from 'react';
import { Component } from 'react';
import { browserHistory } from 'react-router';
import Rebase from 're-base';
import config from './lib/config';
import { getDistance } from './helpers/calculateDistance';


const base = Rebase.createClass(config);

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      vendLongitude:'',
      vendLatitude:'',
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitNewVendor = this.submitNewVendor.bind(this);
  }

  handleChange(event) {
    const name = event.target.name
    this.setState({
      [name]: event.target.value
    })
  }

  submitNewVendor() {
   const {
     name,
     description,
     vendLatitude,
     vendLongitude,
   } = this.state;

   const calcDistance =
   getDistance(
     40.454785,
     -80.021807,
     parseFloat(vendLatitude.trim()), parseFloat(vendLongitude.trim()),
   ).toFixed(2);

   base.push('vendors', {
     data: {
       vndrName: name.trim(),
       description: description.trim(),
       distance: calcDistance,
       latitude: parseFloat(vendLatitude.trim()),
       longitude: parseFloat(vendLongitude.trim()),
     },
   }).then(
     browserHistory.push('/')
   );
 }
  render() {
    return (
      <div>
        <h2> Submit a New Vendor </h2>
        <form onSubmit={this.submitNewVendor}>
          <label>
            Name: <input type="text" name="name" value={this.state.name} onChange={this.handleChange} /><br/>
            Description: <input type="text" name="description" value={this.state.description} onChange={this.handleChange} /><br/>
            Latitude: <input type="text" name="vendLatitude" value={this.state.vendLatitude} onChange={this.handleChange} /><br/>
            Longitude: <input type="text" name="vendLongitude" value={this.state.vendLongitude} onChange={this.handleChange} /><br/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;
