import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { Button, FormControl, Icon, Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react';
import { FiPhone, FiUser } from 'react-icons/fi';
import ChiefContainer from 'components/ChiefContainer/ChiefContainer';
import { addContactThunk } from 'redux/thunk';

export default function ContactForm() {
  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const contacts = useSelector(selectVisibleContacts);
  
  const handleChangeName = event => {
    setName(event.currentTarget.value);
  };
  const handleChangeNumber = event => {
    setNumber(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    
    const contact = { name, number };
    const isFind = contacts.find(contact => contact.name === name);

    if (isFind) {
        alert (`${name} is already in contacts`);
        formReset();
        return;
    }

    dispatch(addContactThunk(contact));
    formReset();
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  return (
   <ChiefContainer>
     <form onSubmit={handleSubmit} autoComplete="on">
        <Stack spacing={4} mt={8}>
            <FormControl isRequired >
                <InputGroup>
                <InputLeftElement pointerEvents='none'>
                    <Icon as={FiUser} mr={'8px'} />
                </InputLeftElement>
                <Input type="text" name="userName" placeholder='Enter full name'
                    pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    onChange={handleChangeName}
                    value={name}
                />
                </InputGroup>
            </FormControl>

            <FormControl isRequired >
                <InputGroup>
                <InputLeftElement pointerEvents='none'>
                    <Icon as={FiPhone} mr={'8px'} />
                </InputLeftElement>
                <Input type="tel" name="userNumber" placeholder='Enter phone number'
                    pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
                    onChange={handleChangeNumber}
                    value={number}
                />
                </InputGroup>
            </FormControl>
            <Button type="submit" backgroundColor='#BEE3F8' _hover={{backgroundColor: '#4299E1'}}>Add contact</Button>
        </Stack>
    </form>
   </ChiefContainer>
  );
}

