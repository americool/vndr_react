import React, { Component } from 'react';
import Rebase from 're-base';
import VendorList from './VendorList';
import config from './lib/config';
import { sortBy } from './helpers/sorted';
import Loading from './Loading';

const base = Rebase.createClass(config);

class ListView extends Component {
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
    ? <Loading speed={150} text={"Loading"}/>
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
      <div>

        <h2> List View </h2>
        {this.listOrLoading()}
      </div>

    );
  }
}


export default ListView;
