import { Route, Routes } from 'react-router-dom';
import './App.css';
import { About } from './component/about/About';
import { Contact } from './component/contact/Contact';
import { Home } from './component/home/Home';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  );
}

export default App;
