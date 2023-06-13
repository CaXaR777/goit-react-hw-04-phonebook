import * as s from './ContactList.styled';
import PropTypes from 'prop-types'


export const ContactList = ({ data, onDeleteContact }) => {
  return (
    <s.List>
      {data.map(user => (
        <s.ListItems key={user.id}>
          <s.Name>{user.name}:</s.Name>
          <s.Number>{user.number}</s.Number>
          <s.Button onClick={() => onDeleteContact(user.id)}>Delete</s.Button>
        </s.ListItems>
      ))}
    </s.List>
  );
};
ContactList.propTypes = {
    data: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  } 