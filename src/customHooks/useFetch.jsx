import {useState, useEffect} from 'react'

function useFetch(url) {

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

      setLoading(true)
      fetch(url)
      .then(res => res.json())
      .then(data => setProduct(data))
      .finally(() => setLoading(false))
      console.log(product)
    }, []) 

  return {product, loading};
}

export default useFetch
