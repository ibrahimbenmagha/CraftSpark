import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Header from './PublicSpace/Header';
import Sidebar from './PublicSpace/Sidebar';
import ServiceList from './PublicSpace/ServiceList';
import './PublicSpace.css';



function App() {

  return (
    
      <div className="App">
        <Header/>
        <div className="content">
          <Sidebar />
            {/* <ServiceList /> */}
            {/* <Route path="/services" element={<ServiceList />} />
            <Route path="/favorites" element={<div>Favoris Content</div>} />
            <Route path="/history" element={<div>Historique Co  ntent</div>} />
            <Route path="/" element={<ServiceList />} /> */}
            <Outlet/>
    
        </div>
      </div>

  );
}

export default App;
