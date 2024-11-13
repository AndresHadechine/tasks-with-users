import './App.css'
import { HomePage } from './pages/HomePage'
import { RegisterPage } from './pages/RegisterPage'
import { LoginPage } from './pages/LoginPage'
import { Routes,Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path="/login" element={< LoginPage />} />
        <Route path="/register" element={< RegisterPage />} />

        <Route path="/" element={< HomePage />} />
      </Routes>
    </>
  )
}

export default App
