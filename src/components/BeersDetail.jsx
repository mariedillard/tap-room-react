import React from 'react';
import PropTypes from 'prop-types';

function BeersDetail(props) {
    return (
        <div>
            <hr/>
            <h3>{props.selectedBeers.name}</h3>
            <h4>{props.selectedBeers.brand}</h4>
            <h5>$ + {props.selectedBeers.price}</h5>
            <h5>{props.selectedBeers.alcoholContent} + /%</h5>
            <hr/>
        </div>
    );
}

BeersDetail.propTypes = {
    selectedBeers: PropTypes.object
};

export default BeersDetail;