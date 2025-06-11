import React from 'react'

const dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 shadow rounded-lg">
        <h3 className="text-xl font-semibold">Birth Requests</h3>
        <p className="text-2xl mt-2">120</p>
      </div>
      <div className="bg-white p-6 shadow rounded-lg">
        <h3 className="text-xl font-semibold">Marriage Requests</h3>
        <p className="text-2xl mt-2">85</p>
      </div>
      <div className="bg-white p-6 shadow rounded-lg">
        <h3 className="text-xl font-semibold">Death Requests</h3>
        <p className="text-2xl mt-2">45</p>
      </div>
    </div>
  );
};

export default dashboard;
