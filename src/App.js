import './App.css'

import Header from './components/Header'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Cart from './pages/Cart'

import './scss/app.scss'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import Admin from './pages/Admin'

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
