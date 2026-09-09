import { useEffect, useState } from "react";
import { getProducts } from "../../services/products.service";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Products() {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  // Llamada a mi servidor para solicitarle los productos a mostrar
  async function loadProducts() {

    try {

      const data = await getProducts()

      setProducts(data)
      setLoading(false)

    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {

    setTimeout(() => {
      loadProducts()
    }, 20000)

  }, [])
  // Al dejar el array de dependencias vacío, el useEffect se ejecutará solo una vez al montar el componente.


  if (loading) {

    return (
      <div>
        <p>Cargando productos...</p>
        <Skeleton count={5} height={200} />
      </div>
    )

  }



  return (
    <div>
      <h1>Products</h1>
      {/* Cantidad de productos: {products.length} */}
      <div className="product-container">



        {
          products.map(prod => {

            return <div className="card" key={prod.id}>
              <h2>{prod.title}</h2>
              <p>{prod.description}</p>
              <p>${prod.price}</p>
            </div>
          })
        }

      </div>

    </div>
  )
}
