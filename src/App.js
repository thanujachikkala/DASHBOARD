import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <BrowserRouter>
      <div className='contain'>
        <Sidebar className='sidebar' id='hii' isOpen={isOpen} ref={menuRef}>
          <main className={isOpen ? 'content-open' : 'content-closed'}>
            <div className='main-content' onClick={toggle}>
              <Routes>
                <Route path="/" element={<Outlet />} >
                  <Route index element={<Dashboard />} />
                  <Route path="about" element={<Dashboard state="data1" />} />
                  <Route path="comment" element={<Dashboard state="data2" />} />
                  <Route path="analytics" element={<Dashboard state="data3" />} />
                  <Route path="product" element={<Dashboard state="data4" />} />
                  <Route path="productList" element={<Dashboard state="data5" />} />
                </Route>
              </Routes>
            </div>
          </main>
        </Sidebar>
      </div>
    </BrowserRouter>
  );
};

export default App;
