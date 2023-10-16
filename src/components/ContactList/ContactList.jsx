import React from 'react';
import { List, Item, Button } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { deleteContacts } from '../../redux/operations';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContacts(contactId));
  };

  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          {contact.name + ' : ' + contact.number}
          <Button
            type="button"
            name="delete"
            onClick={() => handleDeleteContact(contact.id)} // Викликаємо функцію для видалення контакту
          >
            delete
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default ContactList;





