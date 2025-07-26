import React from "react";

const storeData = [
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Flipkart",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Flipkart_logo.png",
  },
  {
    name: "Myntra",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/76/Myntra_Logo.png",
  },
  {
    name: "Ajio",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/66/AJIO_Logo.png",
  },
  {
    name: "Snapdeal",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Snapdeal_Logo.png",
  },
  {
    name: "Tata Cliq",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/Tata_Cliq_Logo.png",
  },
];

const StoreList = () => {
  return (
    <div className="p-4 text-center">
      <h2 className="text-xl font-bold mb-4">Popular Stores</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {storeData.map((store, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={store.logo}
              alt={store.name}
              className="w-24 h-16 object-contain mb-2"
            />
            <p className="text-sm">{store.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreList;
