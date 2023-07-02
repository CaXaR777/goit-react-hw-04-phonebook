import * as s from './ContactForm.styled';
// import { nanoid } from 'nanoid';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const ContactForm = ({saveContact}) => {
  // state = {
  //   name: '',
  //   number: '',
  // };
  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
 

  const submitForm = e => {
    e.preventDefault();
    // this.props.saveContact({ ...this.state, id: nanoid() });
    // this.setState({ name: '', number: '' });
    const newContact = { name, number };
    const isSuccess = saveContact(newContact);
    
    if (isSuccess) 
    setName('');
    setNumber('');
  };
  

  // handleChange = ({ target }) => this.setState({ [target.name]: target.value });
  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };
  

  
    return (
      <s.Form onSubmit={submitForm}>
        <div>
          <s.Label htmlFor="userName">Name</s.Label>
          <input
          value={name}
            onChange={handleNameChange}
            id="userName"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </div>
        <div>
          <s.Label htmlFor="userNumber">Number</s.Label>
          <input
          value={number}
            onChange={handleNumberChange}
            id="userNumber"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>
        <button type="submit">Add contact</button>
      </s.Form>
    );
  }

ContactForm.propTypes = {
  saveContact: PropTypes.func.isRequired,
};

// export default ContactForm;