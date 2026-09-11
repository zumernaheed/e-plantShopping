import { useDispatch, useSelector } from 'react-redux'
import { addItem } from './CartSlice.jsx'
import Navbar from './Navbar.jsx'

const plantCategories = [
  {
    name: 'Air Purifying Plants',
    description: 'Fresh-looking foliage favorites for everyday indoor spaces.',
    plants: [
      { id: 'snake-plant', name: 'Snake Plant', price: 18, description: 'A resilient upright plant that is ideal for beginners.', image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b7e?auto=format&fit=crop&w=700&q=85' },
      { id: 'peace-lily', name: 'Peace Lily', price: 22, description: 'Glossy green foliage with elegant white flowers.', image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=700&q=85' },
      { id: 'spider-plant', name: 'Spider Plant', price: 16, description: 'An easy-growing plant with arching striped leaves.', image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=700&q=85' },
      { id: 'rubber-plant', name: 'Rubber Plant', price: 26, description: 'Bold, glossy leaves make this a striking indoor plant.', image: 'https://images.unsplash.com/photo-1602923668104-8f9e03c88911?auto=format&fit=crop&w=700&q=85' },
      { id: 'boston-fern', name: 'Boston Fern', price: 20, description: 'Soft, feathery fronds create a lush green display.', image: 'https://images.unsplash.com/photo-1597055181300-e3633a917c9c?auto=format&fit=crop&w=700&q=85' },
      { id: 'chinese-evergreen', name: 'Chinese Evergreen', price: 24, description: 'Patterned foliage and forgiving care requirements.', image: 'https://images.unsplash.com/photo-1614594575810-0ea9c95e2565?auto=format&fit=crop&w=700&q=85' },
    ],
  },
  {
    name: 'Low Maintenance Plants',
    description: 'Dependable plants for busy schedules and new plant parents.',
    plants: [
      { id: 'zz-plant', name: 'ZZ Plant', price: 25, description: 'Glossy leaves and excellent tolerance of low light.', image: 'https://images.unsplash.com/photo-1632322592306-7a9fe868f776?auto=format&fit=crop&w=700&q=85' },
      { id: 'golden-pothos', name: 'Golden Pothos', price: 15, description: 'Fast-growing trailing vines with golden variegation.', image: 'https://images.unsplash.com/photo-1600411832986-5a4477b64a1c?auto=format&fit=crop&w=700&q=85' },
      { id: 'aloe-vera', name: 'Aloe Vera', price: 14, description: 'A sculptural succulent that prefers bright indoor light.', image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&w=700&q=85' },
      { id: 'jade-plant', name: 'Jade Plant', price: 19, description: 'A classic succulent with thick leaves and tree-like growth.', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=85' },
      { id: 'cast-iron-plant', name: 'Cast Iron Plant', price: 27, description: 'Deep green leaves and a reputation for being very hardy.', image: 'https://images.unsplash.com/photo-1637967885705-a60e3fea266d?auto=format&fit=crop&w=700&q=85' },
      { id: 'ponytail-palm', name: 'Ponytail Palm', price: 29, description: 'Curving leaves and a distinctive bulb-like trunk.', image: 'https://images.unsplash.com/photo-1613146705397-0f1a1ce7d821?auto=format&fit=crop&w=700&q=85' },
    ],
  },
  {
    name: 'Colorful & Flowering Plants',
    description: 'Add flowers, texture, and vibrant foliage to your collection.',
    plants: [
      { id: 'anthurium', name: 'Anthurium', price: 28, description: 'Bright heart-shaped blooms above glossy foliage.', image: 'https://images.unsplash.com/photo-1610630871403-4d7efac70da5?auto=format&fit=crop&w=700&q=85' },
      { id: 'orchid', name: 'Phalaenopsis Orchid', price: 32, description: 'Graceful long-lasting blooms for bright indoor spaces.', image: 'https://images.unsplash.com/photo-1566907225472-4cb2b8d04459?auto=format&fit=crop&w=700&q=85' },
      { id: 'calathea', name: 'Calathea', price: 26, description: 'Decorative patterned leaves with dramatic color contrast.', image: 'https://images.unsplash.com/photo-1612363148951-15f16817648f?auto=format&fit=crop&w=700&q=85' },
      { id: 'begonia', name: 'Rex Begonia', price: 23, description: 'Colorful textured foliage with silver and burgundy tones.', image: 'https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=700&q=85' },
      { id: 'bromeliad', name: 'Bromeliad', price: 30, description: 'Tropical foliage topped with a vivid central bloom.', image: 'https://images.unsplash.com/photo-1616690248290-0061c2f35c3f?auto=format&fit=crop&w=700&q=85' },
      { id: 'croton', name: 'Croton', price: 21, description: 'Multicolored leaves bring warm tropical color indoors.', image: 'https://images.unsplash.com/photo-1608627222610-8f54c6c39b21?auto=format&fit=crop&w=700&q=85' },
    ],
  },
]

export default function ProductList({ onNavigate }) {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)

  const isInCart = (plantName) => cartItems.some((item) => item.name === plantName)

  return (
    <div className="page-shell">
      <Navbar currentPage="products" onNavigate={onNavigate} />
      <main className="products-page">
        <section className="products-hero">
          <span className="eyebrow">OUR PLANT COLLECTION</span>
          <h1>Find your next favorite houseplant</h1>
          <p>Explore three categories with six unique plants in every collection.</p>
        </section>

        {plantCategories.map((category) => (
          <section className="category-section" key={category.name}>
            <div className="category-heading">
              <div><h2>{category.name}</h2><p>{category.description}</p></div>
              <span>{category.plants.length} plants</span>
            </div>

            <div className="product-grid">
              {category.plants.map((plant) => {
                const added = isInCart(plant.name)
                return (
                  <article className="product-card" key={plant.id}>
                    <div className="product-image-wrap"><img src={plant.image} alt={plant.name} /></div>
                    <div className="product-card-content">
                      <h3>{plant.name}</h3>
                      <p>{plant.description}</p>
                      <div className="product-card-footer">
                        <strong>${plant.price.toFixed(2)}</strong>
                        <button type="button" onClick={() => dispatch(addItem(plant))} disabled={added}>
                          {added ? 'Added to Cart' : 'Add to Cart'}
                        </button>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </section>
        ))}
      </main>
    </div>
  )
}
