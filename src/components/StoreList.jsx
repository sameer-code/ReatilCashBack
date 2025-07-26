import React from "react";

const StoreList = () => {
  const storeData = [
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      link: "https://www.amazon.in/",
    },
    {
      name: "Flipkart",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Flipkart_logo.png",
      link: "https://www.flipkart.com/",
    },
    {
      name: "Myntra",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/76/Myntra_Logo.png",
      link: "https://www.myntra.com/",
    },
    {
      name: "Ajio",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/66/AJIO_Logo.png",
      link: "https://www.ajio.com/",
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 bg-gray-100 rounded">
      {storeData.map((store, index) => (
        <a
          href={store.link}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
          className="text-center hover:scale-105 transition"
        >
          <img
            src={store.logo}
            alt={store.name}
            className="w-24 h-16 object-contain mx-auto mb-2"
          />
          <p className="text-sm font-medium">{store.name}</p>
        </a>
      ))}
    </div>
  );
};

export default StoreList;
