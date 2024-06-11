import React from 'react'
import {Routes, Route ,Navigate} from 'react-router-dom';
import DetailsFillingPage from './Components/DetailsFillComponents/DetailsFillingPage';
import Home from './Components/HomePage/Home'
import NavBar from './Components/Navigation/Navbar'
import MyResume from './Components/ResumeDisplay/MyResume';
import AboutUs from './Components/AboutUs/AboutUs';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';
import Login from './Components/LogIn/login';
import SignIn from './Components/SignIn/SignIn';
import './App.css';


// This component defines routing for other components 
// Home page displays the different templates from which user can select either of them.
//'detailsfillingpage' displays the detailsfillingpage inside which there are nested routes to display personalinfo, workexperience, education and keyskills page.
//'myresume' displays the resume created by the user. 
//'about' displays the AboutUs page of the app.
function App() {
  return (
    <div>
        <div> 
          <NavBar/>
        </div>
        
        <div>
            <Routes>
                  <Route exact path="/" element={<Home/>}></Route>
                  <Route path="/detailsfillingpage/*" element ={<DetailsFillingPage />}></Route> 
                  <Route path="/myresume" element={<MyResume/>}></Route>
                  <Route exact path="/about" element={<AboutUs/>}></Route>
                  <Route exact path="/contact" element={<ContactUs/>}></Route>
                  <Route exact path="/login" element={<Login/>}></Route>
                  <Route exact path="/signin" element={<SignIn/>}></Route>
                  <Route path="*" element={<Navigate to="/about" />}></Route>
                  <Route path="*" element={<Navigate to="/contact" />}></Route>
                  <Route path="*" element={<Navigate to="/login" />}></Route>
                  <Route path="*" element={<Navigate to="/signin "/>}></Route>
            </Routes> 
            
        </div>
        <div>
          <Routes>
            <Route exact path='/' element={<Footer/>}></Route>
          </Routes>
        </div>
        <div>
          <Footer/>
        </div>
    </div>
  )
}


export default App


