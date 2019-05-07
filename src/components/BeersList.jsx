import React from 'react';
import Beers from './Beers';
import PropTypes from 'prop-types';

function BeersList(props){
    return (
        <div>
            <hr/>
            {Object.keys(props.beersList).map(function(beersId) {
                var beers = props.beersList[beersId];
                return <Beers name={beers.name}
                    brand={beers.brand}
                    price={beers.price}
                    alcoholContent={beers.alcoholContent}
                    currentRouterPath={props.currentRouterPath}
                    beersId={beersId}
                    onBeersSelection={props.onBeersSelection}/>;
            })}
        </div>
    );
}

BeersList.propTypes = {
    beersList: PropTypes.object,
    currentRouterPath: PropTypes.string,
    onBeersSelection: PropTypes.func
};

export default BeersList;