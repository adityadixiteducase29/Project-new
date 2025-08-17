import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import DashboardLayout from './components/DashboardLayout'
import Dashboard from './pages/Dashboard/Dashboard'
import Client from './pages/Client'
import Employees from './pages/Employees'
import Application from './pages/Application'
import Help from './pages/Help'
import NotFound from './pages/NotFound'
// Verifier components
import VerifierDashboard from './pages/VerifierDashboard'
import VerifierApplications from './pages/VerifierApplications'
import Pending from './pages/Pending'
import Approved from './pages/Approved'
import VerifierHelp from './pages/VerifierHelp'

const user = [
  {
    id: "u001",
    name: "John Admin",
    email: "john@example.com",
    usertype: "admin",
    role: {
      name: "Admin",
      permissions: {
        viewDocuments: true,
        verifyDocuments: true,
        manageUsers: true,
        accessReports: true,
        viewDashboard: true,
        viewClients: true,
        viewEmployees: true,
        viewApplications: true,
        viewHelp: true
      }
    }
  },
  {
    id: "u002", 
    name: "Sarah Verifier",
    email: "sarah@example.com",
    usertype: "verifier",
    role: {
      name: "Verifier",
      permissions: {
        viewDocuments: true,
        verifyDocuments: true,
        viewVerifierDashboard: true,
        viewVerifierApplications: true,
        viewPending: true,
        viewApproved: true,
        viewVerifierHelp: true
      }
    }
  }
];

function App() {
  const currentUser = user[0]; // Default to first user (admin)
  
  return (
    <Router>
      <div className="App">
        <DashboardLayout userType={currentUser.usertype} user={currentUser}>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/client" element={<Client />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/application" element={<Application />} />
            <Route path="/help" element={<Help />} />
            {/* Verifier routes */}
            <Route path="/verifier-dashboard" element={<VerifierDashboard />} />
            <Route path="/verifier-applications" element={<VerifierApplications />} />
            <Route path="/pending" element={<Pending />} />
            <Route path="/approved" element={<Approved />} />
            <Route path="/verifier-help" element={<VerifierHelp />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DashboardLayout>
      </div>
    </Router>
  );
}

export default App;