import { NavLink, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { StyledBox } from 'App.styled';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthentificated, selectToken } from 'redux/selectors';
import { useEffect } from 'react';
import NoMenu from 'components/NoMenu/NoMenu';
import UserMenu from 'components/UserMenu/UserMenu';
import Loader from 'components/Loader/Loader';
import { Center, Flex, Link, Stack } from '@chakra-ui/react';
import { upgradeUserThunk } from 'redux/thunk';



const HomePage = lazy(() => import('pages/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));

export default function App() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const authentification = useSelector(selectAuthentificated);

  useEffect(() => {
    if (!token || authentification) return;
    dispatch(upgradeUserThunk());
  }, [token, dispatch, authentification]);
  
  return (
    <StyledBox>
      <Stack
        as={'header'}
        direction={['column', 'row', 'row', 'row']}
        alignItems={'center'}
        justifyContent={'space-between'}
        padding={'24px 32px'}
        backgroundColor='#171923'
        >    
        <Flex direction={['column', 'row', 'row', 'row']} gap={['12px', '12px', '32px', '32px']} justifyContent={'space-between'}>
          <Center><Link as={NavLink} fontWeight="700" fontSize={22} _hover={{textDecoration: 'none', color: '#BEE3F8'}} color='#EBF8FF' to="/">Home</Link></Center>
          {authentification && <Center><Link as={NavLink} fontWeight="700" fontSize={22} _hover={{textDecoration: 'none', color: '#BEE3F8'}} color='#EBF8FF' to="/contacts">Contacts</Link></Center>}
        </Flex>
        {authentification ? <UserMenu /> : <NoMenu />}
      </ Stack>
      <main>
        <Suspense fallback={<Loader/>}>
          <Routes>
              <Route path="/">
                <Route index element={<HomePage/>} />
                <Route path="/register" element={<RegisterPage/>} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/contacts" element={
                  <PrivateRoute redirectTo='/login'>
                    <ContactsPage/>
                  </PrivateRoute>} />
                <Route path="*" element={<HomePage/>} />
              </Route>
            </Routes>
          </Suspense>
      </main>
    </StyledBox>
  )
};




