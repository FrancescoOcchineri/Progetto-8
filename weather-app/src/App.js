import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from './components/NavbarComponent';
import Weather from './pages/Weather';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <div className='background'>
        <BrowserRouter>
          <NavbarComponent />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path="/weather/:city" element={<Weather />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
