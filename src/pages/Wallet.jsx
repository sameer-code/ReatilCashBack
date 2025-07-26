import React from "react";

const Wallet = () => {
  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow rounded mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center">💼 My Wallet</h2>
      <div className="space-y-2 text-lg">
        <p><strong>Total Cashback:</strong> ₹560.00</p>
        <p><strong>Pending Cashback:</strong> ₹200.00</p>
        <p><strong>Available to Withdraw:</strong> ₹360.00</p>
      </div>
    </div>
  );
};

export default Wallet;
