import React from 'react';
import NewBeersForm from './NewBeersForm';
import PropTypes from 'prop-types';

class NewBeersControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: true
        };
    }

    render() {
        let currentlyVisibleContent = null;
        if (this.state.formVisibleOnPage) {
            currentlyVisibleContent = <NewBeersForm onNewBeersCreation={this.props.onNewBeersCreation}/>;
        }
        return (
            <div>
                {currentlyVisibleContent}
            </div>
        );
    }
}

NewBeersControl.propTypes = {
    onNewBeersCreation: PropTypes.func
};

export default NewBeersControl;