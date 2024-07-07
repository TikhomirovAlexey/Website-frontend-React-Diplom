import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ButtonToTop from './components/ButtonToTop';
import './sass/App.css';
import Index from './components/Index';
import NotFoundPage from './components/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <ButtonToTop />
      <Routes>
        <Route path='/' element={<Index />}></Route>
        <Route path='*' element={<NotFoundPage />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
