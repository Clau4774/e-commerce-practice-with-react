import ProductsList from '../catalog/ProductsList'

function Main({productsList}) {
  return (
    <div>
        <h2>Product list:</h2>
        <ProductsList productsList={productsList} />
    </div>
  )
}

export default Main
