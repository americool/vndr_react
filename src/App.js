import React, { Component } from 'react';
import logo from './logo.svg';
import ListView from './ListView';
import Header from './Header';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <br/>
        <center>
        <Link to={'/'}>
          <button className="btn btn-block btn-success" type="submit"
          >
            ListView
          </button>
        </Link>
          <Link to={'/map'}>
            <button className="btn btn-block btn-success" type="submit"
            >
              MapView
            </button>
          </Link>
          <Link to={'/form'}>
            <button className="btn btn-block btn-success" type="submit">
              Add Vendor
            </button>
          </Link>
          {this.props.children}
        </center>
      </div>
    );
  }
}


export default App;
