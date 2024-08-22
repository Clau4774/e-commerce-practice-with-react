import Button from "../button/Button";

function Card({product}) {

  const addToCart = () => {
    console.log(price)
  }

  const seeProductBtnInfo = "See this product";
  const btnClassName = "green";

  const addCartInfo = "Add to Cart"

  const {price, title, image} = product;

  return (
    <li className="card-item">
        <div className="card-container">
            <img className="card-image" src={image} alt="" />
            <p>{title}</p>
            <p>${price}</p>
            <div className="card-button-area">
              <Button information={seeProductBtnInfo}/>
              <Button information={addCartInfo} buttonClass={btnClassName}/>
            </div>
        </div>
    </li>
  )
}

export default Card
