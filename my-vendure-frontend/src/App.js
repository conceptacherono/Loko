import React from "react";
import { ApolloProvider, useQuery, gql } from "@apollo/client";
import client from "./apolloClient";

const GET_PRODUCTS = gql`
  query {
    products {
      items {
        id
        name
        description
        featuredAsset {
          preview
        }
      }
    }
  }
`;

function Products() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data.products.items.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <img src={product.featuredAsset?.preview} alt={product.name} width="100" />
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <ApolloProvider client={client}>
      <h1>Vendure Store</h1>
      <Products />
    </ApolloProvider>
  );
}

export default App;
