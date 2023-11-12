import logo from './logo.svg';
import './App.css';
import BasicPagination from '../src/components/Pagination'
import Search from './components/Search';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import React from 'react';
import Cv1 from './Pages/Cv1'
import Profile from './Pages/Profile';
import Page from './Pages/Page';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page/>}></Route>
        <Route path="/cv1" element={<Cv1/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
