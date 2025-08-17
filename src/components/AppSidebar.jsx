import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Dashboard as DashboardIcon, 
  People as PeopleIcon, 
  Assignment as AssignmentIcon, 
  Help as HelpIcon,
  Person as PersonIcon,
  CheckCircle as CheckCircleIcon,
  Pending as PendingIcon,
  VerifiedUser as VerifiedUserIcon
} from '@mui/icons-material';
import './AppSidebar.css';

const AppSidebar = ({ userType, user }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Admin navigation items
  const adminNavItems = [
    {
      path: '/dashboard',
      label: 'Dashboard',
      icon: <DashboardIcon />
    },
    {
      path: '/client',
      label: 'Clients',
      icon: <PeopleIcon />
    },
    {
      path: '/employees',
      label: 'Employees',
      icon: <PersonIcon />
    },
    {
      path: '/application',
      label: 'Applications',
      icon: <AssignmentIcon />
    },
    {
      path: '/help',
      label: 'Help',
      icon: <HelpIcon />
    }
  ];

  // Verifier navigation items
  const verifierNavItems = [
    {
      path: '/verifier-dashboard',
      label: 'Verifier Dashboard',
      icon: <DashboardIcon />
    },
    {
      path: '/verifier-applications',
      label: 'Verifier Applications',
      icon: <AssignmentIcon />
    },
    {
      path: '/pending',
      label: 'Pending',
      icon: <PendingIcon />
    },
    {
      path: '/approved',
      label: 'Approved',
      icon: <CheckCircleIcon />
    },
    {
      path: '/verifier-help',
      label: 'Verifier Help',
      icon: <HelpIcon />
    }
  ];

  // Select navigation items based on user type
  const navItems = userType === 'admin' ? adminNavItems : verifierNavItems;

  return (
    <aside className={`app-sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <img src="/Logo.svg" alt="Logo" />
        </div>
        <button 
          className="sidebar-toggle"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? '→' : '←'}
        </button>
      </div>
      
      <nav className="sidebar-navigation">
        <div className="sidebar-navigation-label">
          Navigation
        </div>
        
        <ul className="sidebar-menu">
          {navItems.map((item) => (
            <li key={item.path} className="sidebar-menu-item">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `sidebar-menu-button ${isActive ? 'active' : ''}`
                }
              >
                <span className="sidebar-icon">{item.icon}</span>
                {!isCollapsed && (
                  <span className="sidebar-label">{item.label}</span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default AppSidebar;