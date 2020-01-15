import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ContactList from './ContactList';
import PropTypes from 'prop-types';


// Main (stateful) component.
// Renders a SearchBar and a ContactList
// Passes down filterText state and handleUserInput callback as props
class ContactsApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: ''
        };
    }
    handleUserInput(searchItem) {
        this.setState({ filterText: searchItem })
    }
    render() {
        return (
            <div className='contactApp'>
                <h2 className='margin-left-20'>Contact List</h2>
                <SearchBar filterText={this.state.filterText}
                    onUserInput={this.handleUserInput.bind(this)} />
                <ContactList contacts={this.props.contacts}
                    filterText={this.state.filterText}
                />
            </div>
        );
    }
}

ContactsApp.propType = {
    contacts: PropTypes.arrayOf(PropTypes.object)
}

export default ContactsApp;