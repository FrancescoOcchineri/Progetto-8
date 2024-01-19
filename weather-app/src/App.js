import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from './components/NavbarComponent';
import WeatherPage from './pages/WeatherPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <>
      <div className='background'>
        <BrowserRouter>
          <NavbarComponent />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path="/weather/:city" element={<WeatherPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
          <FooterComponent />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
