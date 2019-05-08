import React from 'react';
import PropTypes from 'prop-types';
import BeersList from './BeersList';
import BeersDetail from './BeersDetail'; 

function Admin(props){
    let optionalSelectedBeersContent = null;
    if (props.selectedBeers != null) {
        optionalSelectedBeersContent = <BeersDetail selectedBeers={props.beersList[props.beersList]}/>;
    }
    return (
        <div>
            <h2>Admin</h2>
            {optionalSelectedBeersContent}
            <BeersList 
                beersList={props.beersList}
                onBeersSelection={props.onBeersSelection}/>
        </div>
    );
}


Admin.propTypes = {
    beersList: PropTypes.object,
    onBeersSelection: PropTypes.func.isRequired,
    selectedBeers: PropTypes.string
};

export default Admin;