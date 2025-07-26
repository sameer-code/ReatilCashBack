const stores = [
  "ayro.png", "kappa.png", "scott.png", "macys.png",
  "oldnavy.png", "hm.png", "levis.png", "adidas.png"
];

export default function StoreList() {
  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-4">Popular Stores</h3>
      <div className="grid grid-cols-4 gap-4">
        {stores.map((store, i) => (
          <div key={i} className="bg-white shadow rounded p-2">
            <img
              src={`/assets/${store}`}
              alt="store"
              className="w-full h-10 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
