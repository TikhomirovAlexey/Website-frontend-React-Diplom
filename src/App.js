import { Routes, Route, BrowserRouter } from 'react-router-dom';
import React from 'react'
import ButtonToTop from './components/ButtonToTop';
import './sass/App.css';
import Index from './components/Index';
import NotFoundPage from './components/NotFoundPage';
import ForChildrenPages from './components/ForChildrenPages';
import News from './components/News';
import HonorBoard from './components/HonorBoard';

function App() {

  return (
    <BrowserRouter>
      <ButtonToTop />
      <Routes>
        <Route path='/' element={<Index />}></Route>
        <Route path='/pages/:id' element={<ForChildrenPages />}></Route>
        <Route path='/news' element={<News />}></Route>
        <Route path='/honorBoard' element={<HonorBoard />}></Route>
        <Route path='*' element={<NotFoundPage />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
