import React, { useState } from 'react'
import {
  Typography,
  TextField,
  Box,
  Paper,
  CardContent,
  CardHeader,
  Divider,
  Button
} from '@mui/material'
import { Row, Col } from 'reactstrap'
import { Search, FilterList } from '@mui/icons-material'
import './index.css'
import Datatable from "@/components/Datatable"

const VerifierApplications = () => {
  // Sample data for verifier applications
  const initialTableData = [
    { 
      id: 1, 
      applicationId: 'APP001', 
      applicantName: 'John Doe', 
      documentType: 'Aadhar Card', 
      submittedDate: 'Jun 10, 25, 06:45 PM', 
      priority: 'High',
      status: 'Under Review',
      verifier: 'Sarah Verifier'
    },
    { 
      id: 2, 
      applicationId: 'APP002', 
      applicantName: 'Jane Smith', 
      documentType: 'PAN Card', 
      submittedDate: 'Jun 10, 25, 05:30 PM', 
      priority: 'Medium',
      status: 'Pending',
      verifier: 'Unassigned'
    },
    { 
      id: 3, 
      applicationId: 'APP003', 
      applicantName: 'Mike Johnson', 
      documentType: 'Passport', 
      submittedDate: 'Jun 10, 25, 04:15 PM', 
      priority: 'Low',
      status: 'Under Review',
      verifier: 'Sarah Verifier'
    },
    { 
      id: 4, 
      applicationId: 'APP004', 
      applicantName: 'Sarah Wilson', 
      documentType: 'Driving License', 
      submittedDate: 'Jun 10, 25, 03:20 PM', 
      priority: 'High',
      status: 'Pending',
      verifier: 'Unassigned'
    },
    { 
      id: 5, 
      applicationId: 'APP005', 
      applicantName: 'David Brown', 
      documentType: 'Voter ID', 
      submittedDate: 'Jun 10, 25, 02:45 PM', 
      priority: 'Medium',
      status: 'Under Review',
      verifier: 'Sarah Verifier'
    }
  ];

  const [tabledata, setTabledata] = useState(initialTableData);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const columns = [
    { 
      field: 'applicationId', 
      headerName: 'Application ID', 
      flex: 1, 
      minWidth: 120,
      headerAlign: 'left',
      renderCell: (data) => (
        <div className="datatable-cell-content">
          {data.row.applicationId}
        </div>
      ) 
    },
    { 
      field: 'applicantName', 
      headerName: 'Applicant Name', 
      flex: 1, 
      minWidth: 150,
      headerAlign: 'left',
      renderCell: (data) => (
        <div className="datatable-cell-content">
          {data.row.applicantName}
        </div>
      ) 
    },
    { 
      field: 'submittedDate', 
      headerName: 'Submitted Date', 
      flex: 1, 
      minWidth: 160,
      headerAlign: 'left',
      renderCell: (data) => (
        <div className="datatable-cell-content">
          {data.row.submittedDate}
        </div>
      ) 
    },
    { 
      field: 'priority', 
      headerName: 'Priority', 
      flex: 1, 
      minWidth: 100,
      headerAlign: 'left',
      renderCell: (data) => {
        const getPriorityColor = (priority) => {
          switch (priority.toLowerCase()) {
            case 'high':
              return 'red';
            case 'medium':
              return 'orange';
            case 'low':
              return 'green';
            default:
              return 'gray';
          }
        };
        
        const priorityColor = getPriorityColor(data.row.priority);
        
        return (
          <div className={`datatable-priority datatable-priority-${priorityColor}`}>
            {data.row.priority}
          </div>
        );
      } 
    },
    { 
      field: 'status', 
      headerName: 'Status', 
      flex: 1, 
      minWidth: 120,
      headerAlign: 'left',
      renderCell: (data) => (
        <div className="datatable-cell-content">
          {data.row.status}
        </div>
      ) 
    },
    { 
      field: 'verifier', 
      headerName: 'Assigned Verifier', 
      flex: 1, 
      minWidth: 140,
      headerAlign: 'left',
      renderCell: (data) => (
        <div className="datatable-cell-content">
          {data.row.verifier}
        </div>
      ) 
    },
    { 
      field: 'actions', 
      headerName: 'Actions', 
      flex: 1, 
      minWidth: 120,
      headerAlign: 'left',
      sortable: false,
      renderCell: (data) => (
        <div className="datatable-actions">
          <Button 
            variant="outlined" 
            size="small"
            className="action-button"
          >
            Review
          </Button>
        </div>
      ) 
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="dashboard-title">
          Verifier Applications
        </h1>
        <p className="text-gray-600">Manage and review submitted applications</p>
      </div>
      
      {/* Search and Filter Bar */}
      <div className="search-filter-bar">
        <Row className="g-3 align-items-center">
          <Col className="col-12 col-md-6">
            <div className="search-container">
              <Search className="search-icon" />
              <TextField
                fullWidth
                placeholder="Search applications..."
                value={searchTerm}
                onChange={handleSearch}
                variant="outlined"
                size="small"
                className="search-input"
              />
            </div>
          </Col>
          <Col className="col-12 col-md-6">
            <div className="filter-container">
              <Button
                variant="outlined"
                startIcon={<FilterList />}
                className="filter-button"
              >
                Filter
              </Button>
            </div>
          </Col>
        </Row>
      </div>
      
      {/* Applications Table */}
      <div>
        <Datatable
          tabledata={tabledata}
          columns={columns}
          pageSize={10}
        />
      </div>
    </div>
  );
};

export default VerifierApplications;
