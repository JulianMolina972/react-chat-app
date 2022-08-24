import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Chat } from './components/Chat';
import { Home } from './components/Home';
import { Information } from './components/Information';

import './globalStyles.css';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat/:id" element={<Chat />} />
        <Route path="/chat/:id/info" element={<Information />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;