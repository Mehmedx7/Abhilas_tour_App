import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import ListView from './pages/ListView'
import Details from './pages/Details'
import "./index.css";
import { Layout } from './pages/Layout';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      offset:100,
      duration:900,
      easing:"ease-in-sine",
      delay:100,
    });
    AOS.refresh();
  }, [])
  return (
    <>
     
    <Router>
      <Routes>
      <Route path='/' element={<Layout/>} >      
        <Route index element={<Home />} />
        <Route path="/list" element={<ListView />} />
        <Route path="/details" element={<Details />} />
        {/* <Route path="/" element={<Details />} /> */}

      </Route>
        </Routes>
    </Router>
    </>
  );
}

export default App;
