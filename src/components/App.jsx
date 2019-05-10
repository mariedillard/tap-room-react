import React from 'react';
import Header from './Header';
import BeersList from './BeersList';
import NewBeersForm from './NewBeersForm';
import About from './About';
import Admin from './Admin';
import HomePage from './HomePage';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import { v4 } from 'uuid';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            masterBeersList: {},
            selectedBeers: null 
        };
        this.handleAddingNewBeersToList = this.handleAddingNewBeersToList.bind(this);
        this.handleChangingSelectedBeers = this.handleChangingSelectedBeers.bind(this);
        this.handleDeletingSelectedBeers = this.handleDeletingSelectedBeers.bind(this);
    }

    handleAddingNewBeersToList(newBeers) {
        var newBeersId = v4();
        var newMasterBeersList = Object.assign({}, this.state.masterBeersList, {
            [newBeersId]: newBeers
        });
        this.setState({masterBeersList: newMasterBeersList});
    }

    handleChangingSelectedBeers(beersId) {
        this.setState({selectedBeers: beersId});
    }

    render() {
        return (
            <div> 
                <Header/>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/beers' render={()=><BeersList beersList={this.state.masterBeersList} />}/>
                    <Route path='/about' components={About} />
                    <Route path='/admin' render={()=><Admin beersList={this.state.masterBeersList} 
                        onBeersSelection={this.handleChangingSelectedBeers}
                        selectedBeers={this.state.selectedBeers}/>} />
                    <Route path='/newbeer' render={()=><NewBeersForm onNewsBeersCreation={this.handleAddingNewBeersToList} />} />
                    <Route component={Error404} />
                </Switch>
            </div>
        );
    }
}

export default App;