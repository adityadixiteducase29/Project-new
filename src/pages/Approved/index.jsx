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
import { Search, FilterList, CheckCircle } from '@mui/icons-material'
import './index.css'
import Datatable from "@/components/Datatable"

const Approved = () => {
  // Sample data for approved applications
  const initialTableData = [
    { 
      id: 1, 
      applicationId: 'APP001', 
      applicantName: 'John Doe', 
      documentType: 'Aadhar Card', 
      approvedDate: 'Jun 10, 25, 06:45 PM', 
      approvedBy: 'Sarah Verifier',
      verificationTime: '15 minutes'
    },
    { 
      id: 2, 
      applicationId: 'APP002', 
      applicantName: 'Jane Smith', 
      documentType: 'PAN Card', 
      approvedDate: 'Jun 10, 25, 05:30 PM', 
      approvedBy: 'Sarah Verifier',
      verificationTime: '20 minutes'
    },
    { 
      id: 3, 
      applicationId: 'APP003', 
      applicantName: 'Mike Johnson', 
      documentType: 'Passport', 
      approvedDate: 'Jun 10, 25, 04:15 PM', 
      approvedBy: 'Sarah Verifier',
      verificationTime: '12 minutes'
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
      field: 'documentType', 
      headerName: 'Document Type', 
      flex: 1, 
      minWidth: 120,
      headerAlign: 'left',
      renderCell: (data) => (
        <div className="datatable-cell-content">
          {data.row.documentType}
        </div>
      ) 
    },
    { 
      field: 'approvedDate', 
      headerName: 'Approved Date', 
      flex: 1, 
      minWidth: 160,
      headerAlign: 'left',
      renderCell: (data) => (
        <div className="datatable-cell-content">
          {data.row.approvedDate}
        </div>
      ) 
    },
    { 
      field: 'approvedBy', 
      headerName: 'Approved By', 
      flex: 1, 
      minWidth: 140,
      headerAlign: 'left',
      renderCell: (data) => (
        <div className="datatable-cell-content">
          {data.row.approvedBy}
        </div>
      ) 
    },
    { 
      field: 'verificationTime', 
      headerName: 'Verification Time', 
      flex: 1, 
      minWidth: 140,
      headerAlign: 'left',
      renderCell: (data) => (
        <div className="datatable-cell-content">
          {data.row.verificationTime}
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
            startIcon={<CheckCircle />}
          >
            View Details
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
          Approved Applications
        </h1>
        <p className="text-gray-600">View successfully verified applications</p>
      </div>
      
      {/* Search and Filter Bar */}
      <div className="search-filter-bar">
        <Row className="g-3 align-items-center">
          <Col className="col-12 col-md-6">
            <div className="search-container">
              <Search className="search-icon" />
              <TextField
                fullWidth
                placeholder="Search approved applications..."
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
      
      {/* Approved Applications Table */}
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

export default Approved;
