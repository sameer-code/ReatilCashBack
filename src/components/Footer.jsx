export default function Footer() {
  return (
    <footer className="bg-gray-100 p-4 mt-4">
      <h4 className="text-lg font-bold mb-2">
        Retail <span className="text-yellow-500">Cashback</span>
      </h4>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <h5 className="font-semibold">Useful Links</h5>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>How it works</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold">Quick Search</h5>
          <ul>
            <li>Search</li>
            <li>Popular</li>
            <li>Newly Added</li>
            <li>Most Relevant</li>
          </ul>
        </div>
      </div>
      <form className="mt-4 flex">
        <input
          type="email"
          placeholder="Email Address Here"
          className="flex-1 p-2 border"
        />
        <button className="bg-yellow-400 px-4">Join</button>
      </form>
    </footer>
  );
}
