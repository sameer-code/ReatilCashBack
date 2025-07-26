export default function DealsGrid() {
  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">Popular Deals</h3>
      <div className="grid grid-cols-2 gap-4">
        {Array(6).fill().map((_, i) => (
          <div key={i} className="bg-white shadow-md p-2 rounded">
            <span className="bg-yellow-400 text-xs px-2 py-1 rounded-full text-white">
              FEATURED
            </span>
            <div className="h-20 bg-gray-100 my-2" />
            <p className="text-sm font-semibold">$10</p>
          </div>
        ))}
      </div>
    </div>
  );
}