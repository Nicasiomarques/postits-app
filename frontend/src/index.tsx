import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';

import { HomePage } from './pages/Home';
import { NoteContextProvider } from './contexts/Note';

import 'react-toastify/dist/ReactToastify.min.css';
import './globalStyle.css'

ReactDOM.render(
  <NoteContextProvider>
    <React.StrictMode>
      <HomePage />
      <ToastContainer />
    </React.StrictMode>
  </NoteContextProvider>,
  document.getElementById('root')
);