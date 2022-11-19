import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';
import App from './App';
import './index.css'
import thunk from "redux-thunk" 

// slices
import Register from './features/registerSlice'
import loginSlice from './features/loginSlice';
import ForgotSlice from './features/forgot';
import handlePage from './features/heroPage';
import  NewTask  from './features/newTaskSlice';
import taskList from './features/taskList';

export const store = configureStore({
  reducer: {
    Register: Register,
    Login: loginSlice,
    Forgot: ForgotSlice,
    handlePage: handlePage,
    NewTask: NewTask,
    TaskList: taskList
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />

    </Provider>
  </BrowserRouter>
);

