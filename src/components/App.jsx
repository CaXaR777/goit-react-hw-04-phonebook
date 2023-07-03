import React, { useState, useEffect } from 'react';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
// import { nanoid } from 'nanoid'

const App = () => {
  // state = {
  //   contacts: [
  //     // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  // };

    const [contacts, setContacts] = useState(
      () => JSON.parse(localStorage.getItem('contacts')) || []
    );
    const [filter, setFilter] = useState('');

  // componentDidMount() {
  //   // this.setState({ contacts: JSON.parse(localStorage.getItem('contacts')) });
  //   const storedContacts = JSON.parse(localStorage.getItem('contacts'));
  // if (storedContacts !== null) {
  //   this.setState({ contacts: storedContacts });
  // }
  // }
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  
  

  // componentDidUpdate() {
  //   localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
  // }



  // saveContact = contact => {
  //   if (
  //     this.state.contacts.find(
  //       obj => obj.name.toLowerCase() === contact.name.toLowerCase()
  //     )
  //   ) {
  //     return alert(`${contact.name} is already in contacts.`);
  //   }
  //   this.setState(prevState => ({
  //     contacts: [...prevState.contacts, contact],
  //   }));
  
  // };

  const saveContact = newContact => {
    const isContactExists = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (isContactExists) {
      alert(`${newContact.name} is already in contacts.`);
      return false;
    }
    const newContacts = [...contacts, { ...newContact, id: newContact.name }];

    setContacts(newContacts);

    return true;
  };

  // filterValue = e => {
  //   this.setState({ filter: e.target.value });
  //   setFilter(value);
  // };

  const filterValue = (evt)=> {
    // const filteredValue =  String(value).toLowerCase();
    // setFilter(filteredValue);
    // setFilter(value);
    // console.log(value)
    setFilter(evt.target.value.trim());
  };

 
  // const deleteContact = Id => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== Id),
  //   }));
  // };

  const deleteContact = id => {
    const newContacts = contacts.filter(contact => contact.id !== id);
    setContacts(newContacts);
  }
  
  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase()),
  // );

    // const contacts = this.state.contacts;


    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm saveContact={saveContact} />

        <h2>Contacts</h2>
        <div>All contacts: {contacts.length}</div>
        <Filter value={filter} OnChange={filterValue} />
        {contacts.length > 0 && (
          <ContactList
          // data={filteredContacts}
            onDeleteContact={deleteContact}
            data={
              filter
                ? contacts.filter(contact =>
                    contact.name.toLowerCase().includes(String(filter).toLowerCase())
                  )
                : contacts
            }
          />
        )}
       
      </div>
    );
  }


export default App;
