import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux/es/exports';
import AddDistrict from './Components/AddDistrict';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Provider store={store}>
  <BrowserRouter>
    <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/district/:id' element={<AddDistrict/>}/>
    </Routes>
  </BrowserRouter>
  </Provider>
  <ToastContainer/>
  </>
);
