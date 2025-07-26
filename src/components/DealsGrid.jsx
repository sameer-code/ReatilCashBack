import React from "react";

const deals = [
  {
    title: "Amazon - 10% Cashback",
    price: "Upto ₹500",
    link: "https://www.amazon.in/",
  },
  {
    title: "Myntra Sale - Flat ₹300 Cashback",
    price: "Min. Order ₹999",
    link: "https://www.myntra.com/",
  },
  {
    title: "Ajio Flat 15% OFF",
    price: "With Cashback",
    link: "https://www.ajio.com/",
  },
];

const DealsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {deals.map((deal, index) => (
        <a
          href={deal.link}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
        >
          <div className="bg-white p-4 rounded shadow hover:shadow-md hover:scale-105 transition duration-300">
            <h3 className="text-lg font-semibold mb-1">{deal.title}</h3>
            <p className="text-green-600">{deal.price}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default DealsGrid;
