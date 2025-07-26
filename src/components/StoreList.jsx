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

{storeData.map((store, index) => (
  <a href={store.link} target="_blank" rel="noopener noreferrer" key={index}>
    <div className="flex flex-col items-center hover:scale-105 transition">
      <img src={store.logo} alt={store.name} className="w-24 h-16 object-contain mb-2" />
      <p className="text-sm">{store.name}</p>
    </div>
  </a>
))}
