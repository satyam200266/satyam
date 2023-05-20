import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from "./pages/Homepage"
import LoginPage from "./pages/Login"
import RegisterPage from './pages/RegisterPage'
import Footer from './components/footer'
import AddAtendance from './pages/AddAttendance'
import AddEmploye from './pages/AddEmployee'

function App() {
  return (
    <>
        <NavBar/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/addEmploye" element={<AddEmploye/>}/>
            <Route path="/addAttendance" element={<AddAtendance/>}/>
        </Routes>
        <Footer/>
    </>
  )
}

export default App
