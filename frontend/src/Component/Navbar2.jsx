import React from 'react';
import { Link } from 'react-router-dom';

const GovernanceNavbar = () => {
  return (
    <nav className="w-full h-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <Link to="/governance" className="flex items-center">
            <h1 className="text-xl font-bold hover:text-green-500 cursor-pointer">
              Governance
            </h1>
          </Link>

          <div className="flex space-x-8">
            <Link
              to="/governance/proposals"
              className="text-md font-semibold hover:text-[#00D395] transition-colors"
            >
              Proposals
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default GovernanceNavbar;