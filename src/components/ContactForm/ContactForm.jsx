import * as s from './ContactForm.styled';
import { nanoid } from 'nanoid';
import { Component } from 'react';
import PropTypes from 'prop-types';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
 

  submitForm = e => {
    e.preventDefault();
    this.props.saveContact({ ...this.state, id: nanoid() });
    this.setState({ name: '', number: '' });
  };
  handleChange = ({ target }) => this.setState({ [target.name]: target.value });

  render() {
    return (
      <s.Form onSubmit={this.submitForm}>
        <div>
          <s.Label htmlFor="userName">Name</s.Label>
          <input
            onChange={this.handleChange}
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
            onChange={this.handleChange}
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
}
ContactForm.propTypes = {
  saveContact: PropTypes.func.isRequired,
};
