import { Box, Text } from '@chakra-ui/react';
import { List } from './ContactsList.styled';
import ContactsItem from 'components/ContactsItem';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';


const ContactsList = () => {

  const contacts = useSelector(selectVisibleContacts);

  return (
   <Box>
    <List>
      {contacts && contacts.map(({ name, number, id }) => (
        <ContactsItem
          key={id}
          id={id}
          name={name}
          number={number}
        />
      ))}
      {contacts.length === 0 && <Text fontSize={16} fontWeight='bold' color='#086a68'>There aren't contacts!</Text>}
    </List>
   </Box>
  );
};


export default ContactsList;