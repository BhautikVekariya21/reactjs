import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/footer'
import {Outlet} from 'react-router-dom'

 export default function Root() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}