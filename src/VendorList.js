import React from 'react';
const PropTypes = React.PropTypes;

function VendorList (data) {
  return (
    <div>
      {data.map(vendor => (
        <ul> {vendor.vndrName} | {vendor.description} | {vendor.description} </ul>
        )
      )}
    </div>
  );
}

VendorList.PropTypes = {
  data: PropTypes.array.isRequired
}

export default VendorList;

// props.data.map(vendor => (
//   <ul> {vendor.vndrName} | {vendor.description} | {vendor.description} </ul>
// );
