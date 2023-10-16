import { useEffect } from 'react';
import { selectContacts } from 'redux/selectors';
import { fetchContacts } from '../redux/operations';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Title, Zag, Blok } from './App.styled';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export const App = () => {
 
  const contacts = useSelector(selectContacts);
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    return (
      <Container>
        <Title>Phonebook</Title>

        <ContactForm/>

        <Zag>Contacts</Zag>
        {contacts.length > 0 ? (
          // Фільтр
          <Filter/>
        ) : (
          <Blok>It's empty. Add a contact!</Blok>
        )}
        {contacts.length > 0 && (
          // Список контактів
          <ContactList/>
        )}
      </Container>
    );

}
export default App;
