import React from 'react'
import Footer from './Footer'
import Header from './Header'

function SecoundLayout({children}) {
  return (
    <React.Fragment>
        <Header/>
        {children}
        <Footer/>
    </React.Fragment>
  )
}

export default SecoundLayout