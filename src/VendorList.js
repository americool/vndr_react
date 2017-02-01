import React from 'react';
const PropTypes = React.PropTypes;


function VendorList (props) {
  return (
     <div>
        {props.data.map(vendor => (
          <ul key={vendor.key}>{vendor.vndrName} | {vendor.description} | {vendor.distance} mi.</ul>
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
