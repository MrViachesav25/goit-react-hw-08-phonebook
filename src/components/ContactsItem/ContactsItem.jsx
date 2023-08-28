import PropTypes from 'prop-types';

import {
  ContactItem,
  ContactName,
  ContactNumber,
} from './ContactsItem.styled';
import { useDispatch } from 'react-redux';
import { Box, Button, Icon } from '@chakra-ui/react';
import { FiTrash2 } from 'react-icons/fi';
import { deleteContactThunk } from 'redux/thunk';

const ContactsItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  
  const deleteContact = userId => {
    dispatch(deleteContactThunk(userId))
  }
  return (
    <ContactItem key={id}>
      <ContactName>
        {name}:<ContactNumber>{number}</ContactNumber>
      </ContactName>
      <Box>
        <Button onClick={() => deleteContact(id)} mr={'2px'} mt={'2px'} mb={'2px'} backgroundColor='#BEE3F8' _hover={{backgroundColor: '#4299E1'}}><Icon as={FiTrash2} /></Button>
      </Box>
    </ContactItem>
  );
};

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactsItem;