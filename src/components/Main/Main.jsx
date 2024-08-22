import ProductsList from '../catalog/ProductsList'

function Main({productsList}) {
  return (
    <div className="home-container">
        <h2>Product list:</h2>
        <ProductsList productsList={productsList} />
    </div>
  )
}

export default Main
