import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import user from 'reducers/user';

import Welcome from 'pages/Welcome';
import Login from 'pages/Login';
import Signup from 'pages/SignUp';
import NewEventForm from 'pages/NewEventForm';
import MyEvents from 'pages/MyEvents';
import NotFound from 'pages/NotFound';

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
          <Route path="/neweventform" element={<NewEventForm />}<</Route>
          <Route path="/myevents" element={<MyEvents />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
