import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Copyright from '../components/copyright'
import './hub.css'

const Hub = (props) => {
  return (
    <div className="hub-container">
      <Helmet>
        <title>Hub - Amaterasu Hub</title>
        <meta property="og:title" content="Hub - Amaterasu Hub" />
      </Helmet>
      <Navbar></Navbar>
      <main className="hub-main">
        <div className="hub-hero section-container"></div>
        <div className="section-container">
          <div className="hub-max-width max-content-container">
            <h2 className="hub-text">
              <span>OwO</span>
              <br></br>
              <span>Coming Soon...</span>
            </h2>
          </div>
        </div>
      </main>
      <Footer></Footer>
      <Copyright></Copyright>
    </div>
  )
}

export default Hub
