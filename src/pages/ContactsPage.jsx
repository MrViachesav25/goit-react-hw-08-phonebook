import { Box, Button, useDisclosure } from '@chakra-ui/react';
import ChiefContainer from 'components/ChiefContainer/ChiefContainer';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactsList from 'components/ContactsList/ContactsList';
import FilterInput from 'components/FilterInput/FilterInput';
import ModalWindow from 'components/ModalWindow/Modal';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthentificated } from 'redux/selectors';
import { fetchContactThunk } from 'redux/thunk';

const ContactsPage = () => {
  const authentification = useSelector(selectAuthentificated);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();


  useEffect(() => {
    if (!authentification) return;
    dispatch(fetchContactThunk());
  }, [authentification, dispatch]);

  return (
    <ChiefContainer title="PhoneBook">
      <FilterInput />
      <Box marginTop={4}><Button onClick={onOpen} marginBottom={18} backgroundColor='#BEE3F8' _hover={{backgroundColor: '#4299E1'}} fontSize={16}>Add new contact</Button></Box>
      <ContactsList />
      <ModalWindow isOpen={isOpen} onClose={onClose}>
          <ContactForm onClose={onClose} />
      </ModalWindow>
    </ChiefContainer>
  )
}

export default ContactsPage;

