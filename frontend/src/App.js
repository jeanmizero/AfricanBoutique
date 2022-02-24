import React from 'react'
// Import Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// Import Container
import { Container } from 'react-bootstrap'
// Import components
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'

// Main App
const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
              <Route path='/' element={<HomeScreen />} />
              <Route path='/product/:id' element={<ProductScreen />} />
            </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
