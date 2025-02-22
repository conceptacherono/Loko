import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchVendureData } from "../../lib/api";

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      fetchVendureData(`
        query GetProduct($id: ID!) {
          product(id: $id) {
            name
            description
            featuredAsset {
              preview
            }
          }
        }
      `, { id }).then((data) => setProduct(data.data.product));
    }
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <img src={product.featuredAsset?.preview} alt={product.name} />
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
}