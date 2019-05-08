import React from 'react';
import PropTypes from 'prop-types';

function NewBeersForm(props) {
    let _name = null;
    let _brand = null;
    let _price = null;
    let _alcoholContent = null;

    function handleNewBeersFormSubmission(event) {
        event.preventDefault();
        props.onNewBeersCreation({name: _name.value, brand: _brand.value, price: _price.value, alcoholContent: _alcoholContent.value});
        _name.value = '';
        _brand.value = '';
        _price.value = ''; 
        _alcoholContent.value = '';
    }

    return (
        <div>
            <form onSubmit={handleNewBeersFormSubmission}>
                <input 
                    type='text'
                    id='name'
                    placeholder='Name'
                    ref={(input) => {_name = input;}}/>
                <input 
                    type='text' 
                    id='brand' 
                    placeholder='Brand'
                    ref={(input) => {_brand = input;}}/>
                <input 
                    type='number'
                    id='price' 
                    placeholder='Price'
                    ref={(input) => {_price = input;}}/>
                <input 
                    type='number' 
                    id='alcoholContent' 
                    placeholder='Alcohol Content' 
                    ref={(input) => {_alcoholContent = input;}}/>
            </form>
        </div>
    );
}

NewBeersForm.propTypes = {
    onNewBeersCreation: PropTypes.func
};

export default NewBeersForm;