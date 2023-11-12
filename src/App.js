import logo from './logo.svg';
import './App.css';
import BasicPagination from '../src/components/Pagination'
import Search from './components/Search';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Cv1 from './Pages/Cv1'
import Profile from './Pages/Profile';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cv1/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
      </Routes>
    </BrowserRouter>
    {/* <BasicPagination/>
    <Search/> */}
    </>
  );
}

export default App;
