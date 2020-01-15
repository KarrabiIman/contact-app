import React, { Component } from 'react';
import ContactItem from './ContactItem';
import PropsTypes from 'prop-types';


// Pure component that receives both contacts and filterText as props
// The component is responsible for actualy filtering the
// contacts before displaying them.
// It's considered a pure component because given the same
// contacts and filterText props the output will always be the same.
class ContactList extends Component {
    render() {
        let filteredContacts = this.props.contacts.filter(
            (contact) => contact.name.indexOf(this.props.filterText) !== -1
        );
        return (
            <ul>
                {filteredContacts.map(
                    (contact) => <ContactItem name={contact.name}
                                              key={contact.email}
                                              email={contact.email} />
                )}
            </ul>
        );
    }
}

ContactList.propsTypes = {
    contacts: PropsTypes.arrayOf(PropsTypes.object),
    filterText: PropsTypes.string.isRequired
}

export default ContactList;