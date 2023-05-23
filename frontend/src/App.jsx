import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet, Route, Routes, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from "./pages/Homepage"
import LoginPage from "./pages/Login"
import RegisterPage from './pages/RegisterPage'
import Footer from './components/footer'
import AddAtendance from './pages/AddAttendance'
import AddEmploye from './pages/AddEmployee'
import ManageEmployes from './pages/ManageEmployes'
import AddNote from './components/Modal'
import Setting from './pages/Setting'
import useIsUserValid from './helper/auth'


const IsNotLogedin = () => {
    const [user] = useIsUserValid()
    return (!user) ? <Outlet/> : <Navigate to="/" />
  }
  
  const IsLogedin = () => {
    const [user] = useIsUserValid()
    return user ? <Outlet/> : <Navigate to="/login" />
  }
  

function App() {
    const [user, check] = useIsUserValid()
    useEffect(() => {
        const interval = setInterval(check, 10000)
        return () => clearInterval(interval)
    })
  return (
    <>
        <NavBar/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>

            <Route element={<IsNotLogedin/>}>
                <Route path="/login" element={<LoginPage/>}/>
            </Route>
            <Route element={<IsLogedin/>}>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/addEmploye" element={<AddEmploye/>}/>
                <Route path="/addAttendance" element={<AddAtendance/>}/>
                <Route path="/ManageEmployes" element={<ManageEmployes/>}/>
                <Route path="/Setting" element={<Setting/>}/>
            </Route>
        </Routes>
        <Footer/>
    </>
  )
}

export default App
