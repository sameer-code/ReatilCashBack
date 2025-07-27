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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {deals.map((deal, index) => (
        <a
          href={deal.link}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
          className="block"
        >
          <div className="bg-white border border-gray-200 p-5 rounded-xl shadow hover:shadow-lg hover:scale-[1.03] transition-all duration-300 ease-in-out">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">{deal.title}</h3>
            <p className="text-green-600 font-medium">{deal.price}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default DealsGrid;
