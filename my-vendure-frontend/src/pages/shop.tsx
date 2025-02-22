import { useEffect, useState } from "react";
import { fetchVendureData } from "../lib/api";

export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchVendureData(`
      query {
        products {
          items {
            id
            name
            featuredAsset {
              preview
            }
          }
        }
      }
    `).then((data) => setProducts(data.data.products.items));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Shop</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg">
            <img src={product.featuredAsset?.preview} alt={product.name} />
            <h2>{product.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}