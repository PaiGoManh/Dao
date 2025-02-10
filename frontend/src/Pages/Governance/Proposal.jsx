import React from "react";
import { Link } from "react-router-dom";

const GovernanceTable = () => {
  const proposals = [
    {
      title: "Update USDe Comet on Mantle to support more collaterals",
      status: "ACTIVE",
      date: "Feb 7th, 2025",
      governor: "Compound Governor",
      votesFor: "320.07K",
      votesAgainst: "0",
      totalVotes: "320.07K",
      addresses: "8 addresses",
    },
    {
      title: "Update USDC, USDT and WETH Comets on Optimism to support...",
      status: "ACTIVE",
      date: "Feb 7th, 2025",
      governor: "Compound Governor",
      votesFor: "320.07K",
      votesAgainst: "0",
      totalVotes: "320.07K",
      addresses: "9 addresses",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mx-[8%] border border-gray-200">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 border-b border-gray-400 pb-3">
        <h2 className="text-lg font-semibold text-purple-600">All Proposals</h2>
        <Link to="/governance/addproposal">
        <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
          + New proposal
        </button>
        </Link>
      </div>

      {/* Table */}
      <div className=" rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200 border-collapse">
          {/* Table Header */}
          <thead className="">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Proposal</th>
              <th className="px-4 py-2 text-right text-sm font-medium text-gray-700">Votes for</th>
              <th className="px-4 py-2 text-right text-sm font-medium text-gray-700">Votes against</th>
              <th className="px-4 py-2 text-right text-sm font-medium text-gray-700">Total votes</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="bg-white divide-y divide-gray-200">
            {proposals.map((proposal, index) => (
              <tr key={index}>
                <td className="px-4 py-4">
                  <div>
                    <p className="text-sm font-semibold text-black">{proposal.title}</p>
                    <div className="flex items-center gap-3 text-xs text-gray-500 mt-2">
                      <span className="bg-purple-200 text-purple-600 px-2 py-1 rounded-md text-xs font-semibold">
                        {proposal.status}
                      </span>
                      <span>{proposal.date}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">{proposal.governor}</p>
                  </div>
                </td>
                <td className="px-4 py-2 text-right text-green-500 font-medium">{proposal.votesFor}</td>
                <td className="px-4 py-2 text-right text-red-500 font-medium">{proposal.votesAgainst}</td>
                <td className="px-4 py-2 text-right font-medium text-black">{proposal.totalVotes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GovernanceTable;
