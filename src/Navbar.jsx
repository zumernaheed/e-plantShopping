import { useSelector } from 'react-redux'

export default function Navbar({ currentPage, onNavigate }) {
  const items = useSelector((state) => state.cart.items)
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="navbar">
      <button className="brand-button" type="button" onClick={() => onNavigate('home')}>
        <span className="brand-mark">🌿</span>
        <span>
          <strong>Paradise Nursery</strong>
          <small>Houseplants for happier spaces</small>
        </span>
      </button>

      <nav className="nav-links" aria-label="Main navigation">
        <button className={currentPage === 'home' ? 'active' : ''} onClick={() => onNavigate('home')}>Home</button>
        <button className={currentPage === 'products' ? 'active' : ''} onClick={() => onNavigate('products')}>Plants</button>
        <button className={`cart-nav-button ${currentPage === 'cart' ? 'active' : ''}`} onClick={() => onNavigate('cart')}>
          <span>🛒</span><span>Cart</span><span className="cart-count">{cartCount}</span>
        </button>
      </nav>
    </header>
  )
}
