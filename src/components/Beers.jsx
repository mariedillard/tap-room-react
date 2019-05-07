import React from 'react';
import PropTypes from 'prop-types';

function Beers(props){
    const beersInformation =
        <div>
            <h3>{props.name}</h3>
            <h4>{props.brand}</h4>
            <h5>$ + {props.price}</h5>
            <h5>{props.alcoholContent} + /%</h5>

        </div>;
    if (props.currentRouterPath === '/admin') {
        return (
            <div>
                {beersInformation}
            </div>
        );
    } else {
        return (
            <div>
                {beersInformation}
            </div>
        );
    }
}

Beers.propTypes = {
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    alcoholContent: PropTypes.number.isRequired
};

export default Beers;