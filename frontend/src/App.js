import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Welcome from 'pages/Welcome';
import Login from 'pages/Login';
import Signup from 'pages/SignUp';
import NewEvent from 'pages/NewEvent';
import Confirmation from 'pages/Confirmation';
import MyEvents from 'pages/MyEvents';
import NotFound from 'pages/NotFound';

import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import user from 'reducers/user';



const reducer = combineReducers({
  user: user.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    
    <Provider store={store}>
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
    </Provider>
  );
};
