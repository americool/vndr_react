import React, { Component } from 'react';
import logo from './logo.svg';
import Rebase from 're-base';
import VendorList from './VendorList';
import config from './lib/config';
import './App.css';

const some_data = [
  {
    vndrName: "test 1",
    description: "ga",
    distance: 0.1
  },
  {
    vndrName: "test 2",
    description: "newf",
    distance: 0.2
  },
  {
    vndrName: "test 3",
    description: "bert",
    distance: 0.3
  },
]

const base = Rebase.createClass(config);

class App extends Component {

  fetchData() {
    this.setState({ isLoading: true });
    base.fetch('vendors', {
      context: this,
      asArray: true,
    }).then((data) => {
      console.log(data)
      // const sortedData = sortBy(data, 'distance');
      this.setState({
        data: data,
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

        <VendorList data={some_data} />

      </div>
    );
  }
}

export default App;
