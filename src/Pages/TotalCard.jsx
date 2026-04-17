import React from "react";

const TotalCard = () => {
  
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 px-4 py-6 max-w-5xl mx-auto">

      <div className="bg-base-100 border border-cyan-500/20 rounded-2xl px-5 py-6">
        <p className="text-3xl font-black text-cyan-500">10</p>
        <p className="text-sm text-gray-400 mt-1">Total Friends</p>
      </div>

      <div className="bg-base-100 border border-green-500/20 rounded-2xl px-5 py-6">
        <p className="text-3xl font-black text-green-500">10</p>
        <p className="text-sm text-gray-400 mt-1">On Track</p>
      </div>

      <div className="bg-base-100 border border-yellow-500/20 rounded-2xl px-5 py-6">
        <p className="text-3xl font-black text-yellow-500">10</p>
        <p className="text-sm text-gray-400 mt-1">Need Attention</p>
      </div>

      <div className="bg-base-100 border border-purple-500/20 rounded-2xl px-5 py-6">
        <p className="text-3xl font-black text-purple-500">10</p>
        <p className="text-sm text-gray-400 mt-1">Interactions This Month</p>
      </div>

    </div>
  );
};

export default TotalCard;