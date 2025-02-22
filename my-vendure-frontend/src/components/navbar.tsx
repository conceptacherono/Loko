import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 bg-blue-500 text-white">
      <ul className="flex space-x-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/shop">Shop</Link></li>
        <li><Link href="/cart">Cart</Link></li>
      </ul>
    </nav>
  );
}
