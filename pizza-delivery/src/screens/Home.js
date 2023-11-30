import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Landing from '../components/landing'
import Carroussel from '../components/Carroussel'


export default function Home() {
  return (
    <div>
        <Navbar/>
        <div>
            <Landing/>
            <Carroussel/>
     
        </div>
        <Footer/>
        
    </div>
  )
}
