function Card({product}) {

  const addToCart = () => {
    console.log(product.price)
  }

  return (
    <li className="card-item">
        <div className="card-container">
            <img className="card-image" src={product.image} />
            <p>{product.title}</p>
            <p>${product.price}</p>
            <div className="card-button-area">
              <button>See this product</button>
              <button onClick={addToCart}>Add to Cart</button>
            </div>
        </div>
    </li>
  )
}

export default Card
