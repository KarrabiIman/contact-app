import React, { Component } from 'react';
import PropTypes from 'prop-types';


// Pure component that receives 2 props from the parent
// filterText (string) and onUserInput (callback function)
class SearchBar extends Component {
    handleChange(event){
        this.props.onUserInput(event.target.value)
    }
    render() {
        return (
            <input className='margin-left-20' 
                   type='text'
                   placeholder='Search'
                   value={this.props.filterText}
                   onChange={this.handleChange.bind(this)}
                   // @Iman: it's also work
                   // onChange={(event) => this.props.onUserInput(event.target.value)}
            />
        );
    }
}

SearchBar.propTypes = {
    filterText: PropTypes.string.isRequired,
    onUserInput: PropTypes.func.isRequired
}
export default SearchBar;