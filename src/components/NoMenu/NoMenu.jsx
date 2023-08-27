import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NoMenu = () => {
  return (
    <Box>
        <Flex direction={['column', 'row', 'row', 'row']} alignItems={'center'} gap={['10px', '10px', '25px', '25px']} >
            <Box fontWeight="700" fontSize={22} color='#EBF8FF' _hover={{color: '#BEE3F8'}}><Link as={NavLink} to="/register">Sign Up</Link></Box>
            <Box fontWeight="700" fontSize={22} color='#EBF8FF' _hover={{color: '#BEE3F8'}}><Link as={NavLink} to="/login">Log In</Link></Box>
        </Flex>
    </Box>
  )
};

export default NoMenu;