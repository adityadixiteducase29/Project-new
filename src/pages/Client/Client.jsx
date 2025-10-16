import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, People, Apps, ShowChart } from "@mui/icons-material";
import { PersonalInformation } from "@/components/PersonalInformation";
// import '../pages/Dashboard/index.css';
import Datatable from "@/components/Datatable";
import { FaUsers, FaFingerprint, FaHourglassHalf, FaCalendarWeek } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { PlusCircle } from 'lucide-react';
import { Button } from "reactstrap";
import AddClient from "./AddClient/AddClient";
import { useAppSelector } from '@/store/hooks';
import apiService from '@/services/api';
import { toast } from 'react-toastify';

const Client = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [modal, setModal] = useState(false);
  const [linkCopiedStates, setLinkCopiedStates] = useState({});

  const auth = useAppSelector(state => state.auth);

  const toggle = () => setModal(!modal);

  // Fetch clients from API
  const fetchClients = async () => {
    try {
      setLoading(true);
      setError('');

      // Get auth token
      const token = localStorage.getItem('auth_token');
      if (!token) {
        throw new Error('Authentication token not found');
      }

      // Set token in API service
      apiService.setToken(token);

      // Fetch companies
      const result = await apiService.request('/companies', {
        method: 'GET'
      });

      setClients(result.data || []);
    } catch (error) {
      console.error('Error fetching clients:', error);
      setError(error.message);
      toast.error('Failed to fetch clients');
    } finally {
      setLoading(false);
    }
  };

  // Load clients on component mount
  useEffect(() => {
    fetchClients();
  }, []);

  // Refresh clients after adding a new one
  const handleClientAdded = () => {
    fetchClients();
    toggle();
  };

  const handleEditClick = (row) => {
    console.log('Edit clicked for row:', row);
    // Add your edit logic here
  };

  const handleCopyLink = async (clientId, companyLink) => {
    try {
      // Copy link to clipboard
      await navigator.clipboard.writeText(companyLink);
      
      // Update copied state
      setLinkCopiedStates(prev => ({
        ...prev,
        [clientId]: true
      }));

      // Show success message
      toast.success('Company link copied to clipboard!');

      // Reset copied state after 3 seconds
      setTimeout(() => {
        setLinkCopiedStates(prev => ({
          ...prev,
          [clientId]: false
        }));
      }, 3000);

    } catch (error) {
      console.error('Error copying link:', error);
      toast.error('Failed to copy link');
    }
  };

  const cards = [
    { label: 'Clients', value: clients.length, icon: <FaUsers /> },
    { label: 'Total Verifications', value: clients.reduce((sum, client) => sum + (client.pending_count || 0), 0), icon: <FaFingerprint /> },
    { label: 'Pending', value: clients.reduce((sum, client) => sum + (client.pending_count || 0), 0), icon: <FaHourglassHalf /> },
    { label: 'This week', value: clients.filter(client => {
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      return new Date(client.created_at) >= weekAgo;
    }).length, icon: <FaCalendarWeek /> },
  ];

  // Use API data directly without transformation
  const tableData = clients;

  const columns = [
    { 
      field: 'name', 
      headerName: 'Client Name', 
      flex: 1, 
      minWidth: 120,
      headerAlign: 'left',
      renderCell: (params) => (
        <div className="datatable-cell-content">
          {params.row.name}
        </div>
      ) 
    },
    { 
      field: 'email', 
      headerName: 'Email', 
      flex: 1, 
      minWidth: 150,
      headerAlign: 'left',
      renderCell: (params) => (
        <div className="datatable-cell-content">
          {params.row.email}
        </div>
      ) 
    },
    { 
      field: 'pending_count', 
      headerName: 'Pending Cases', 
      flex: 1, 
      minWidth: 120,
      headerAlign: 'left',
      renderCell: (params) => (
        <div className="datatable-cell-content">
          {params.row.pending_count}
        </div>
      ) 
    },
    { 
      field: 'id', 
      headerName: 'Client ID', 
      flex: 1, 
      minWidth: 100,
      headerAlign: 'left',
      renderCell: (params) => (
        <div className="datatable-cell-content">
          {params.row.id}
        </div>
      ) 
    },
    { 
      field: 'enabled_services', 
      headerName: 'Services', 
      flex: 1, 
      minWidth: 80,
      headerAlign: 'left',
      renderCell: (params) => (
        <div className="datatable-cell-content">
          {params.row.enabled_services ? params.row.enabled_services.length : 0}
        </div>
      ) 
    },
    {
      field: 'link',
      headerName: 'Company Link',
      flex: 1,
      minWidth: 120,
      headerAlign: 'left',
      sortable: false,
      renderCell: (params) => {
        const { id, company_link } = params.row;
        const isCopied = linkCopiedStates[id];
        
        return isCopied ? (
          <Link className="datatable-link-copied">
            Link copied
          </Link>
        ) : (
          <Link
            className="datatable-link"
            onClick={() => handleCopyLink(id, company_link)}
          >
            Copy link
          </Link>
        );
      },
    }
  ];

  if (loading) {
    return (
      <div className="space-y-8">
        <div className="flex gap-2 justify-between align-center">
          <h1 className="dashboard-title mb-0">Clients</h1>
        </div>
        <div className="text-center py-8">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-8">
        <div className="flex gap-2 justify-between align-center">
          <h1 className="dashboard-title mb-0">Clients</h1>
          <Button
            className="custom-primary-button"
            onClick={toggle}
          >
            <PlusCircle size={17}/>
            Add Client
          </Button>
        </div>
        <div className="text-center py-8">
          <div className="alert alert-danger">
            Error: {error}
          </div>
          <Button onClick={fetchClients} className="mt-3">
            Retry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="flex gap-2 justify-between align-center">
        <h1 className="dashboard-title mb-0">
          Clients
        </h1>
        <Button
          className="custom-primary-button"
          onClick={toggle}
        >
          <PlusCircle size={17}/>
          Add Client
        </Button>
      </div>

      <div>
        <Datatable
          tabledata={tableData}
          columns={columns}
          pageSize={8}
        />
      </div>
      <AddClient modal={modal} toggle={toggle} onClientAdded={handleClientAdded} />
    </div>
  );
};

export default Client;