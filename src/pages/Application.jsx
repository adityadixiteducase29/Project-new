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
import apiService from '@/services/api';
import { useSelector } from 'react-redux';

const Application = () => {
  const { token } = useSelector((state) => state.auth);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch applications from API
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        setLoading(true);
        // Set the token for API requests
        apiService.setToken(token);
        
        const response = await apiService.getAllApplications();
        
        if (response.success) {
          setApplications(response.data || []);
        } else {
          setError(response.message || 'Failed to fetch applications');
        }
      } catch (err) {
        setError('Failed to fetch applications');
        console.error('Error fetching applications:', err);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchApplications();
    }
  }, [token]);

  const handleEditClick = (row) => {
    console.log('Edit clicked for row:', row);
    // Add your edit logic here
  };

  const cards = [
    { label: 'Clients', value: 28, icon: <FaUsers /> },
    { label: 'Total Verifications', value: 120, icon: <FaFingerprint /> },
    { label: 'Pending', value: 96, icon: <FaHourglassHalf /> },
    { label: 'This week', value: 16, icon: <FaCalendarWeek /> },
  ];

  const handleCopyLink = (id) => {
    setApplications(applications =>
      applications.map(row =>
        row.id === id ? { ...row, linkCopied: true } : row
      )
    );
  };

  const columns = [
    { 
      field: 'applicant_name', 
      headerName: 'Name', 
      flex: 1, 
      minWidth: 150,
      headerAlign: 'left',
      renderCell: (params) => (
        <div className="datatable-cell-content">
          {`${params.row.applicant_first_name} ${params.row.applicant_last_name}`}
        </div>
      ) 
    },
    { 
      field: 'applicant_phone', 
      headerName: 'Contact No.', 
      flex: 1, 
      minWidth: 120,
      headerAlign: 'left',
      renderCell: (params) => (
        <div className="datatable-cell-content">
          {params.row.applicant_phone || 'N/A'}
        </div>
      ) 
    },
    { 
      field: 'company_name', 
      headerName: 'Client', 
      flex: 1, 
      minWidth: 120,
      headerAlign: 'left',
      renderCell: (params) => (
        <div className="datatable-cell-content">
          {params.row.company_name || 'N/A'}
        </div>
      ) 
    },
    { 
      field: 'id', 
      headerName: 'Online ID', 
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
      field: 'created_at', 
      headerName: 'Applied', 
      flex: 1, 
      minWidth: 120,
      headerAlign: 'left',
      renderCell: (params) => (
        <div className="datatable-cell-content">
          {new Date(params.row.created_at).toLocaleDateString()}
        </div>
      ) 
    },
    { 
      field: 'application_status', 
      headerName: 'Status', 
      flex: 1, 
      minWidth: 100,
      headerAlign: 'left',
      renderCell: (params) => (
        <div className="datatable-cell-content">
          <span className={`status-badge status-${params.row.application_status}`}>
            {params.row.application_status}
          </span>
        </div>
      ) 
    }
  ];

  return (
    <div className="space-y-8">
      <style>
        {`
          .status-badge {
            padding: 4px 8px;
            border-radius: 12px;
            font-size: 12px;
            font-weight: 500;
            text-transform: capitalize;
          }
          .status-pending {
            background-color: #fef3c7;
            color: #92400e;
          }
          .status-assigned {
            background-color: #dbeafe;
            color: #1e40af;
          }
          .status-under_review {
            background-color: #fef3c7;
            color: #92400e;
          }
          .status-approved {
            background-color: #d1fae5;
            color: #065f46;
          }
          .status-rejected {
            background-color: #fee2e2;
            color: #991b1b;
          }
        `}
      </style>
      {/* Welcome Header */}
      <div className="flex flex-col gap-2">
        <h1 className="dashboard-title" style={{color:"#4F378B"}}>
          Applications
        </h1>
      </div>

      <div>
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="text-lg">Loading applications...</div>
          </div>
        ) : error ? (
          <div className="flex justify-center items-center h-64">
            <div className="text-lg text-red-600">{error}</div>
          </div>
        ) : (
          <Datatable
            tabledata={applications}
            columns={columns}
            pageSize={8}
          />
        )}
      </div>
    </div>
  );
};

export default Application;