import { Avatar, Button, Icon, Stack, Text } from '@chakra-ui/react';
import React from 'react'
import { FiLogOut } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from 'redux/selectors';
import { logoutUserThunk } from 'redux/thunk';


const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logoutUserThunk());
  }
  
  return (
    <Stack direction={['column', 'row', 'row', 'row']} alignItems={'center'}>
      <Avatar mr={'10px'} size='sm' name={user.name} src='' />
      <Text fontWeight="700" fontSize={22} color='#BEE3F8' mr={'50px'}>Wellcome, {user.name}!</Text>
      <Button type='button' onClick={handleLogout} backgroundColor='#BEE3F8' _hover={{backgroundColor: '#4299E1'}}><Icon as={FiLogOut} mr={'10px'} />Log Out</Button>
    </Stack>
  )
};

export default UserMenu;