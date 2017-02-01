import React from 'react';
import Loading from './Loading';
const PropTypes = React.PropTypes;


function VendorList (props) {
  return (
     <div>
        {props.data.map(vendor => (
          <ul> {vendor.vndrName} | {vendor.description} | {vendor.distance} mi. </ul>
          )
        )}
      </div>
    );
}

VendorList.PropTypes = {
  data: PropTypes.array.isRequired,
}

export default VendorList;

// props.data.map(vendor => (
//   <ul> {vendor.vndrName} | {vendor.description} | {vendor.description} </ul>
// );
