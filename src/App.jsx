import { useState } from 'react'
import AboutUs from './AboutUs.jsx'
import CartItem from './CartItem.jsx'
import Navbar from './Navbar.jsx'
import ProductList from './ProductList.jsx'
import './App.css'

function App() {
  // Required state for the Paradise Nursery assignment.
  const [showProductList, setShowProductList] = useState(false)
  const [showCart, setShowCart] = useState(false)

  const handleGetStartedClick = () => {
    setShowProductList(true)
    setShowCart(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavigate = (page) => {
    if (page === 'home') {
      setShowProductList(false)
      setShowCart(false)
    }

    if (page === 'products') {
      setShowProductList(true)
      setShowCart(false)
    }

    if (page === 'cart') {
      setShowProductList(false)
      setShowCart(true)
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (showCart) {
    return <CartItem onNavigate={handleNavigate} />
  }

  if (showProductList) {
    return <ProductList onNavigate={handleNavigate} />
  }

  return (
    <div className="landing-page">
      <Navbar currentPage="home" onNavigate={handleNavigate} />

      <main>
        <section className="landing-hero">
          <div className="background-image"></div>
          <div className="hero-overlay"></div>

          <div className="landing-content">
            <span className="eyebrow light">WELCOME TO</span>
            <h1>Paradise Nursery</h1>
            <p>
              Where Green Meets Serenity. Discover beautiful houseplants
              selected to bring fresh energy, texture, and calm into every room.
            </p>

            <button
              className="get-started-button"
              type="button"
              onClick={handleGetStartedClick}
            >
              Get Started
            </button>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="section-heading">
            <span className="eyebrow">ABOUT PARADISE NURSERY</span>
            <h2>Bringing nature closer to home</h2>
          </div>
          <AboutUs />
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2026 Paradise Nursery. Grow something beautiful.</p>
      </footer>
    </div>
  )
}

export default App
