import shoppingCart from "../../assets/cart.png"

function Purchase() {
  return (
    <div className="purchase-container">
      <p>Your summary</p>
      <img className="purchase-icon" src={shoppingCart} alt="purchase icon" />
    </div>
  )
}

export default Purchase
