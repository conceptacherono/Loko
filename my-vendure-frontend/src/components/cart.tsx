import { useCartStore } from '../store/cart';
export default function Cart() {
  const { cart, removeFromCart } = useCartStore();

  return (
    <div className="p-4 border rounded-md">
      <h2 className="text-xl font-bold">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between p-2 border-b">
              <img src={item.image} alt={item.name} className="w-10 h-10" />
              <p>{item.name}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}