import { HashRouter, Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import Work from './pages/Work.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import NoPage from './pages/NoPage.jsx';

function App() {
  return (
    <BrowserRouter className = 'App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='work' element={<Work />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
