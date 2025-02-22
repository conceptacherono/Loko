import { useEffect, useState } from "react";
import { fetchVendureData } from "../lib/api";

export default function Home() {
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
      <h1 className="text-3xl font-bold">Welcome to Our Store</h1>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-md">
            <img src={product.featuredAsset?.preview} alt={product.name} className="w-full h-40 object-cover" />
            <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}