import { Route, Routes } from 'react-router-dom';
import './App.css';
import { About } from './component/about/About';
import { Contact } from './component/contact/Contact';
import { Home } from './component/home/Home';
import { Blogs } from './component/blog/Blogs';
import { Nav } from './component/navigation/Nav';
import { Page404 } from './component/404/Page404';
import { Category } from './component/category/Category';

function App() {
  return (
    <>
    <Nav />
    <Routes>
      <Route path="*" element={<Page404 />} />
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog/:id" element={<Blogs />} />
      <Route path="/category/:name" element={<Category />} />
    </Routes>
    </>
  );
}

export default App;
