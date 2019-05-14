import React from 'react';
import PropTypes from 'prop-types';

function Beers(props){
    const beersInformation =
        <div>
            <style jsx>{`
                div {
                    background-color: #FAC9B8;
                    text-align: center;
                    width: 200px;
                    height: 200px;
                    padding: 50px;
                    margin: 50px;
                    float: left;
                    border-style: solid;
                    border-radius: 5px;
                    border-color: #212D40;
                    border-width: 15px;
                }
            `}</style>
            <h1>{props.name}</h1>
            <h3>{props.brand}</h3>
            <h4>{props.price}</h4>
            <h5>{props.alcoholContent}%</h5>
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
    alcoholContent: PropTypes.number.isRequired,
    currentRouterPath: PropTypes.string,
    onBeersSelection: PropTypes.func,
    beersId: PropTypes.string.isRequired
};

export default Beers;