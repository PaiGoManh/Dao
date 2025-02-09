import { Routes, Route } from 'react-router-dom';
import GovernanceNavbar from '../../Component/Navbar2'
import Home from '../Governance/Home'
import Proposal from './Proposal';

const GovernanceApp = () => {
  return (
    <div>
      <GovernanceNavbar /> 
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/proposal" element={<Proposal />} />
      </Routes>
    </div>
  );
};

export default GovernanceApp;