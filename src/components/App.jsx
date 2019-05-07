import React from 'react';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' />
                    <Route path='/beers' />
                    <Route path='/about' />
                    <Route path='/admin' />
                    <Route component={Error404} />
                </Switch>
            </div>
        );
    }
}

export default App;