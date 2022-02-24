import React from 'react'
// Import Container
import { Container } from 'react-bootstrap'
// Import components
import Header from './components/Header'
import Footer from './components/Footer'

// Main App
const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <h1>Welcome to African Boutique</h1>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
