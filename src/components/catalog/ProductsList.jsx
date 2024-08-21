import useFetch from "../../customHooks/useFetch"
import Card from "./Card"


function ProductsList() {
  const url = "https://fakestoreapi.com/products";
  const {product, loading} = useFetch(url)
  return (
    <div>
      <ul id="catalog">
          {loading && <li>Loading Products...</li>}
          {product?.map(product => (<Card key={product.id} product={product}/>))}          
      </ul>
      <button>See more</button>
    </div>
  )
}


export default ProductsList
