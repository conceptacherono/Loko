const API_URL = "http://localhost:3000/shop-api";

export async function fetchVendureData(query: string, variables = {}) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });
  return res.json();
}