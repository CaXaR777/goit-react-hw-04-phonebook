import React, { Component } from 'react';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
// import { nanoid } from 'nanoid'

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  saveContact = contact => {
    if (
      this.state.contacts.find(
        obj => obj.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      return alert(`${contact.name} is already in contacts.`);
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  filterValue = e => {
    this.setState({ filter: e.target.value });
  };

  deleteContact = Id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== Id),
    }));
  };

  render() {
    const contacts = this.state.contacts;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm saveContact={this.saveContact} />

        <h2>Contacts</h2>
        <div>All contacts: {this.state.contacts.length}</div>
        <Filter value={this.state.filter} OnChange={this.filterValue} />
        <ContactList
          onDeleteContact={this.deleteContact}
          data={
            this.state.filter
              ? contacts.filter(contact =>
                  contact.name
                    .toLowerCase()
                    .includes(this.state.filter.toLowerCase())
                )
              : contacts
          }
        />
      </div>
    );
  }
}

export default App;
