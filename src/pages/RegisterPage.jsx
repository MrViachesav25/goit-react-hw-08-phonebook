import { Button, FormControl, Heading, Icon, Input, InputGroup, InputLeftElement, InputRightElement, Stack } from '@chakra-ui/react';
import { FiUser, FiMail, FiLock, FiLogIn } from "react-icons/fi";
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

import ChiefContainer from 'components/ChiefContainer/ChiefContainer';
import { selectAuthentificated } from 'redux/selectors';
import { Navigate } from 'react-router-dom';
import { registerUserThunk } from 'redux/thunk';



const RegisterPage = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const dispatch = useDispatch();

  const authentification = useSelector(selectAuthentificated);
  if (authentification) return <Navigate to='/contacts' />

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const firstPassword = form.elements.firstPassword.value;
    const secondPassword = form.elements.secondPassword.value;
    if(firstPassword !== secondPassword) return toast.error('Your password is not correct!');
    
    dispatch(registerUserThunk({
        name: form.elements.userName.value,
        email: form.elements.userEmail.value,
        password: form.elements.firstPassword.value
    }));
    form.reset();
    }


  
  return (
  <ChiefContainer>
     <form onSubmit={handleSubmit} autoComplete="on" >
     <Heading textAlign='center'>Sign Up</Heading>
     <Stack spacing={4} mt={8}>
      <FormControl isRequired>
        <InputGroup>
          <InputLeftElement pointerEvents='none'>
            <Icon as={FiUser} mr={'8px'} />
          </InputLeftElement>
          <Input type='text' name="userName" placeholder='First name' />
        </InputGroup>
      </FormControl>
      
      <FormControl isRequired>
        <InputGroup>
          <InputLeftElement pointerEvents='none'>
            <Icon as={FiMail} mr={'8px'} />
          </InputLeftElement>
          <Input type='email' name="userEmail" placeholder='Enter email' />
        </InputGroup>
      </FormControl>
      
      <FormControl isRequired>
        <InputGroup>
          <InputLeftElement pointerEvents='none'>
            <Icon as={FiLock} />
          </InputLeftElement>
          <Input
            name="firstPassword"
            minLength='4'
            pr='4.5rem'
            type={show ? 'text' : 'password'}
            placeholder='Enter password'
          />
          <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' backgroundColor='#BEE3F8' _hover={{backgroundColor: '#4299E1'}} onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      
      <FormControl isRequired>
        <InputGroup>
          <InputLeftElement pointerEvents='none'>
            <Icon as={FiLock} mr={'8px'} />
          </InputLeftElement>
          <Input
            name="secondPassword"
            minLength='4'
            pr='4.5rem'
            type={show ? 'text' : 'password'}
            placeholder='Enter password else'
          />
          <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' backgroundColor='#BEE3F8' _hover={{backgroundColor: '#4299E1'}} onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>  
      <Button type="submit" backgroundColor='#BEE3F8' _hover={{backgroundColor: '#4299E1'}}><Icon as={FiLogIn} mr={'8px'}/>Registration</Button> 
    </Stack>
   </form>
  </ChiefContainer>
  )
}

export default RegisterPage;

