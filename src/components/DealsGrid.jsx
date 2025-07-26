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

{deals.map((deal, index) => (
  <a href={deal.link} target="_blank" rel="noopener noreferrer" key={index}>
    <div className="bg-white p-4 rounded shadow hover:shadow-md hover:scale-105 transition">
      <h3 className="text-lg font-semibold">{deal.title}</h3>
      <p className="text-green-600">{deal.price}</p>
    </div>
  </a>
))}
