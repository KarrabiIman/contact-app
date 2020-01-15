import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ContactsApp from './ContactsApp';


class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: []
    };
  }

  componentDidMount() {
    // fetch('assets/json/contacts.json')  /**@Iman: it also works */
    fetch(process.env.PUBLIC_URL + '/assets/json/contacts.json')
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({ contacts: responseData })
      })
      .catch((error) => {
        console.log('Error Fetching Data and Parsing : ', error)
      });
  }


  render() {
    // let contacts = [
    //   { name: "Roshanak Abedi", email: "roshanak-abedi@gmail.com" },
    //   { name: "Iman Karrabi", email: "iman-karrabi@gmail.com" },
    //   { name: "Mohsen Ebrahimi", email: "mohsen-ebrahimi@gmail.com" },
    //   { name: "Omid Ghiasi", email: "omid-ghiasi@yahoo.com" },
    //   { name: "Ryan Florence", email: "rpflorence@somewhere.com" },
    //   { name: "Sebastian Markbage", email: "sebmarkbage@here.com" }
    // ]
    return <ContactsApp contacts={this.state.contacts} />;
  }
}

export default App;
