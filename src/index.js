import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// import '@fontsource-variable/rubik';
import App from 'App';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { persistor, store } from 'redux/store';
import { ChakraProvider, theme } from '@chakra-ui/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <BrowserRouter basename='/goit-react-hw-08-phonebook'>
            <App />
          </BrowserRouter>
        </Provider>
    </PersistGate >
  </ChakraProvider>
);

