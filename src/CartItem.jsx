import { useDispatch, useSelector } from 'react-redux'
import { removeItem, updateQuantity } from './CartSlice.jsx'
import Navbar from './Navbar.jsx'

export default function CartItem({ onNavigate }) {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)

  const totalQuantity = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  )

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({
        name: item.name,
        quantity: item.quantity + 1,
      })
    )
  }

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          name: item.name,
          quantity: item.quantity - 1,
        })
      )
    } else {
      dispatch(removeItem(item.name))
    }
  }

  const handleDelete = (item) => {
    dispatch(removeItem(item.name))
  }

  return (
    <div className="page-shell">
      <Navbar currentPage="cart" onNavigate={onNavigate} />

      <main className="cart-page">
        <section className="cart-header">
          <span className="eyebrow">YOUR SHOPPING CART</span>
          <h1>Review your plants</h1>
          <p>
            {totalQuantity === 0
              ? 'Your cart is currently empty.'
              : `${totalQuantity} item${totalQuantity === 1 ? '' : 's'} in your cart.`}
          </p>
        </section>

        {cartItems.length === 0 ? (
          <section className="empty-cart">
            <div className="empty-cart-icon">🪴</div>
            <h2>Your cart needs a little greenery.</h2>
            <p>Add plants from our collection to see them here.</p>
            <button
              type="button"
              onClick={() => onNavigate('products')}
            >
              Continue Shopping
            </button>
          </section>
        ) : (
          <div className="cart-layout">
            <section className="cart-items">
              {cartItems.map((item) => {
                const itemTotal = item.price * item.quantity

                return (
                  <article className="cart-item-card" key={item.name}>
                    <img src={item.image} alt={item.name} />

                    <div className="cart-item-details">
                      <div>
                        <h2>{item.name}</h2>
                        <p className="unit-price">
                          Unit price: ${item.price.toFixed(2)}
                        </p>
                      </div>

                      <div className="quantity-controls">
                        <button
                          type="button"
                          onClick={() => handleDecrement(item)}
                        >
                          −
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          type="button"
                          onClick={() => handleIncrement(item)}
                        >
                          +
                        </button>
                      </div>

                      <div className="cart-item-bottom">
                        <strong>
                          Item total: ${itemTotal.toFixed(2)}
                        </strong>

                        <button
                          className="delete-button"
                          type="button"
                          onClick={() => handleDelete(item)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </article>
                )
              })}
            </section>

            <aside className="cart-summary">
              <h2>Order Summary</h2>

              <div className="summary-line">
                <span>Total items</span>
                <strong>{totalQuantity}</strong>
              </div>

              <div className="summary-line total-line">
                <span>Total Cart Amount</span>
                <strong>${totalAmount.toFixed(2)}</strong>
              </div>

              <button
                className="checkout-button"
                type="button"
                onClick={() => window.alert('Functionality Coming Soon')}
              >
                Checkout
              </button>

              <button
                className="continue-button"
                type="button"
                onClick={() => onNavigate('products')}
              >
                Continue Shopping
              </button>
            </aside>
          </div>
        )}
      </main>
    </div>
  )
}
