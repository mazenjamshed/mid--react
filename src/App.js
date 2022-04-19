import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Contact from './pages/contact.component';
import Donation from './pages/donation.component';
import Error from './pages/error404.component';
import HomePage from './pages/homepage.component';
import Invoice from './pages/invoice.component';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/donation' element={<Donation />} />
          <Route path='/invoice' element={<Invoice />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
