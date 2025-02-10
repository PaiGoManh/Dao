import React from "react";

const AddProposal = () => {
  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 border border-gray-300 mt-8">
      {/* Propose Certificate Section */}
      <h2 className="text-xl font-bold text-gray-800 mb-4">Propose Certificate</h2>

      <div className="space-y-3">
        <input
          type="text"
          placeholder="Certificate ID"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Name"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Course"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Grade"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="date"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button className="w-full bg-blue-500 text-white font-medium py-2 rounded-md hover:bg-blue-600 transition">
          Propose Certificate
        </button>
      </div>

      {/* Voting Section */}
      <h2 className="text-xl font-bold text-gray-800 mt-6 mb-4">Voting Section</h2>

      <div className="space-y-3">
        <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
          <option>Abstain</option>
          <option>Approve</option>
          <option>Reject</option>
        </select>

        <input
          type="text"
          placeholder="Enter voting reason"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button className="w-full bg-green-500 text-white font-medium py-2 rounded-md hover:bg-green-600 transition">
          Vote
        </button>
        <button className="w-full bg-yellow-400 text-white font-medium py-2 rounded-md hover:bg-yellow-500 transition">
          Queue Proposal
        </button>
        <button className="w-full bg-red-500 text-white font-medium py-2 rounded-md hover:bg-red-600 transition">
          Execute Proposal
        </button>
      </div>
    </div>
  );
};

export default AddProposal;
