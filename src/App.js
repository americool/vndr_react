import React, { Component } from 'react';
import logo from './logo.svg';
import Rebase from 're-base';
import VendorList from './VendorList';
import config from './lib/config';
import { sortBy } from './helpers/sorted';
var Loading = require('./Loading');
import './App.css';

const base = Rebase.createClass(config);

class App extends Component {
  constructor(props) {
    super(props);
    this.state =
    {
      data: [],
      isLoading: false,
    }
  }

  listOrLoading() {
    return this.state.isLoading === true
    ? <Loading speed={100} text={"Loading"}/>
    : <VendorList data={this.state.data} />
  }

  fetchData() {
    this.setState({ isLoading: true });
    base.fetch('vendors', {
      context: this,
      asArray: true,
    }).then((data) => {
      console.log(data)
      const sortedData = sortBy(data, 'distance');
      this.setState({
        data: sortedData,
        isLoading: false,
      });
      console.log(this.state)
    }).catch(() => {
      console.log("error")
      this.setState({ isLoading: false });
    });
  }
  componentDidMount() {
    this.fetchData();
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>VNDR</h2>
        </div>
        <p className="App-intro">
          Here is a list of crap.
        </p>

        {this.listOrLoading()}

      </div>
    );
  }
}

export default App;
