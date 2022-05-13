import React, { useState } from 'react'
import ContactSection from '../ContactSection/ContactSection'
import Header from '../Header/Header'

function Layout({ children }) {
  return (
    <main>
        <Header />
        {children}
        <ContactSection />
    </main>
  )
}

export default Layout