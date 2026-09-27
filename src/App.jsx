import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import ScrollToTop from "./components/ScrollToTop"
import ScrollToTopButton from "./components/ScrollToTopButton"
import Navbar from "./components/Navbar"
import Footer from './components/Footer'
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ClassesPage from "./pages/ClassesPage"
import BmiPage from "./pages/BMIPage"
import TrainersPage from "./pages/TrainersPage"
import PricingPage from "./pages/PricingPage"
import ContactPage from "./pages/ContactPage"
function App() {

  return (
    <BrowserRouter>
    <ScrollToTop/>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/classes" element={<ClassesPage/>}/>
      <Route path="/bmi-calculator" element={<BmiPage />}/>
      <Route path="/trainers" element={<TrainersPage/>}/>
      <Route path="/pricing" element={<PricingPage/>}/>
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
    <ScrollToTopButton/>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
