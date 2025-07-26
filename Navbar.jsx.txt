export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-4 py-3 bg-white shadow-md">
      <h1 className="text-xl font-bold text-black">
        Retail <span className="text-yellow-500">Cashback</span>
      </h1>
      <button className="text-black text-xl">☰</button>
    </nav>
  );
}
