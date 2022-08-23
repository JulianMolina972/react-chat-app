import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Chat } from './components/Chat';
import { Home } from './components/Home';
import './globalStyles.css';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat/:id" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;