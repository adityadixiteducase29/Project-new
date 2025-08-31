import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { useAppSelector, useAppDispatch } from './store/hooks'
import { selectIsAuthenticated, selectUser, selectToken, setCredentials, clearCredentials } from './store/slices/authSlice'
import { useApiToken } from './hooks/useApiToken'
import AuthStorage from './utils/storage'
import DashboardLayout from './components/DashboardLayout'
import Dashboard from './pages/Dashboard/Dashboard'
import Client from './pages/Client/Client'
import Employees from './pages/Employees'
import Application from './pages/Application'
import Help from './pages/Help'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import UserForm from './pages/UserForm'
// Verifier components
import VerifierDashboard from './pages/VerifierDashboard'
import VerifierApplications from './pages/VerifierApplications'
import Pending from './pages/Pending'
import Approved from './pages/Approved'
import VerifierHelp from './pages/VerifierHelp'

// Protected Route Component
const ProtectedRoute = ({ children, requiredRole = null }) => {
  const dispatch = useAppDispatch();
  const { user, isAuthenticated, loading, token } = useAppSelector(state => state.auth);

  // Sync API service token with Redux
  useApiToken();

  // Check localStorage on mount and restore auth state if available
  useEffect(() => {
    const checkStoredAuth = () => {
      const storedAuth = AuthStorage.getAuth();
      if (storedAuth && !isAuthenticated) {
        console.log('🔄 Restoring auth state from localStorage');
        dispatch(setCredentials({
          token: storedAuth.token,
          ...storedAuth.user
        }));
      }
    };

    checkStoredAuth();
  }, [dispatch, isAuthenticated]);

  // Fetch user profile if we have a token but no user data
  useEffect(() => {
    if (token && !user && !loading) {
      // You could fetch user profile here if needed
      console.log('Token available, user data should be restored from localStorage');
    }
  }, [token, user, loading]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && user?.user_type !== requiredRole) {
    // Redirect to appropriate dashboard based on user role
    switch (user?.user_type) {
      case 'admin':
        return <Navigate to="/dashboard" replace />;
      case 'verifier':
        return <Navigate to="/verifier-dashboard" replace />;
      case 'company':
        return <Navigate to="/company-dashboard" replace />;
      default:
        return <Navigate to="/dashboard" replace />;
    }
  }

  return children;
};

// Main App Routes Component
const AppRoutes = () => {
  const { user, isAuthenticated } = useAppSelector(state => state.auth);

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={
        isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login />
      } />
      
      {/* Public UserForm route - accessible without authentication */}
              <Route path="/user-form/:companyId" element={<UserForm />} />
      
      {/* Root redirect */}
      <Route path="/" element={
        isAuthenticated ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />
      } />

      {/* Admin Routes */}
      <Route path="/dashboard" element={
        <ProtectedRoute requiredRole="admin">
          <DashboardLayout>
            <Dashboard />
          </DashboardLayout>
        </ProtectedRoute>
      } />
      
      <Route path="/client" element={
        <ProtectedRoute requiredRole="admin">
          <DashboardLayout>
            <Client />
          </DashboardLayout>
        </ProtectedRoute>
      } />
      
      <Route path="/employees" element={
        <ProtectedRoute requiredRole="admin">
          <DashboardLayout>
            <Employees />
          </DashboardLayout>
        </ProtectedRoute>
      } />
      
      <Route path="/application" element={
        <ProtectedRoute requiredRole="admin">
          <DashboardLayout>
            <Application />
          </DashboardLayout>
        </ProtectedRoute>
      } />
      
      <Route path="/help" element={
        <ProtectedRoute requiredRole="admin">
          <DashboardLayout>
            <Help />
          </DashboardLayout>
        </ProtectedRoute>
      } />

      {/* Verifier Routes */}
      <Route path="/verifier-dashboard" element={
        <ProtectedRoute requiredRole="verifier">
          <DashboardLayout>
            <VerifierDashboard />
          </DashboardLayout>
        </ProtectedRoute>
      } />
      
      <Route path="/verifier-applications" element={
        <ProtectedRoute requiredRole="verifier">
          <DashboardLayout>
            <VerifierApplications />
          </DashboardLayout>
        </ProtectedRoute>
      } />
      
      <Route path="/pending" element={
        <ProtectedRoute requiredRole="verifier">
          <DashboardLayout>
            <Pending />
          </DashboardLayout>
        </ProtectedRoute>
      } />
      
      <Route path="/approved" element={
        <ProtectedRoute requiredRole="verifier">
          <DashboardLayout>
            <Approved />
          </DashboardLayout>
        </ProtectedRoute>
      } />
      
      <Route path="/verifier-help" element={
        <ProtectedRoute requiredRole="verifier">
          <DashboardLayout>
            <VerifierHelp />
          </DashboardLayout>
        </ProtectedRoute>
      } />

      {/* Company Routes (Future) */}
      <Route path="/company-dashboard" element={
        <ProtectedRoute requiredRole="company">
          <DashboardLayout>
            <div className="p-4">
              <h2>Company Dashboard</h2>
              <p>Company dashboard coming soon...</p>
            </div>
          </DashboardLayout>
        </ProtectedRoute>
      } />

      {/* 404 Route */}
      <Route path="*" element={
        <ProtectedRoute>
          <DashboardLayout>
            <NotFound />
          </DashboardLayout>
        </ProtectedRoute>
      } />
    </Routes>
  );
};

// Main App Component
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <AppRoutes />
        </div>
      </Router>
    </Provider>
  );
}

export default App;