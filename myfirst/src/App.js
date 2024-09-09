import { BrowserRouter,Routes,Route } from "react-router-dom";
import "./App.css";
import React from "react";
import Header from "./Header";
import Home from "./Home";
import {lazy,Suspense} from 'react'
const About = lazy(()=>import('./About'))
const Contact = lazy(()=>import('./Contact'))

//functional component
function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>  
     <Suspense>           {/* //this header is fixed  */}
    <Routes>
    <Route  path='' element={<Home/>}/>
    
    <Route  path='/about' element={<About/>}/>
    <Route  path='/contact' element={<Contact/>}/>
    
    </Routes>
    </Suspense>
    </BrowserRouter>
    </>
  );
}
export default App;
