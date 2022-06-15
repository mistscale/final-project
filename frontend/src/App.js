import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Welcome from 'pages/Welcome';
import Login from 'pages/Login';
import Signup from 'pages/SignUp';
import NewEvent from 'pages/NewEvent';
// import Confirmation from 'pages/Confirmation';
import MyEvents from 'pages/MyEvents';
import NotFound from 'pages/NotFound';

export const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/newevent" element={<NewEvent />}></Route>
          <Route path="/confirmation" element={<Confirmation />}></Route>
          <Route path="/myevents" element={<MyEvents />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};
