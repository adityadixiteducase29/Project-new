import React, { useState } from 'react'
import {
  Typography,
  TextField,
  Box,
  Paper,
  CardContent,
  CardHeader,
  Divider
} from '@mui/material'
import { Row, Col, Input, Label } from 'reactstrap'
import { FaClipboardCheck, FaHourglassHalf, FaCheckCircle, FaTimesCircle } from 'react-icons/fa'
import './index.css'
import Datatable from "@/components/Datatable"

const VerifierDashboard = () => {
  const cards = [
    { label: 'Total Applications', value: 156, icon: <FaClipboardCheck /> },
    { label: 'Pending Review', value: 42, icon: <FaHourglassHalf /> },
    { label: 'Approved Today', value: 18, icon: <FaCheckCircle /> },
    { label: 'Rejected Today', value: 5, icon: <FaTimesCircle /> },
  ];

  // Sample data for verifier dashboard
  const initialTableData = [
    { 
      id: 1, 
      applicantName: 'John Doe', 
      documentType: 'Aadhar Card', 
      submittedDate: 'Jun 10, 25, 06:45 PM', 
      priority: 'High',
      status: 'Pending Review'
    },
    { 
      id: 2, 
      applicantName: 'Jane Smith', 
      documentType: 'PAN Card', 
      submittedDate: 'Jun 10, 25, 05:30 PM', 
      priority: 'Medium',
      status: 'Pending Review'
    },
    { 
      id: 3, 
      applicantName: 'Mike Johnson', 
      documentType: 'Passport', 
      submittedDate: 'Jun 10, 25, 04:15 PM', 
      priority: 'Low',
      status: 'Pending Review'
    },
    { 
      id: 4, 
      applicantName: 'Sarah Wilson', 
      documentType: 'Driving License', 
      submittedDate: 'Jun 10, 25, 03:20 PM', 
      priority: 'High',
      status: 'Pending Review'
    },
    { 
      id: 5, 
      applicantName: 'David Brown', 
      documentType: 'Voter ID', 
      submittedDate: 'Jun 10, 25, 02:45 PM', 
      priority: 'Medium',
      status: 'Pending Review'
    }
  ];

  const [tabledata, setTabledata] = useState(initialTableData);

  const columns = [
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
    }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="flex flex-col gap-2">
        <h1 className="dashboard-title">
          Verifier Dashboard
        </h1>
        <p className="text-gray-600">Review and verify submitted documents</p>
      </div>
      
      {/* Stats Cards */}
      <div className="card-container-dashboard">
        {cards.map((card, index) => (
          <div className="card-dashboard h-[102px] w-[237px]" key={index}>
            <div className="flex gap-2">
              <div className="card-icon-dashboard">{card.icon}</div>
              <div className="card-label-dashboard">{card.label}</div>
            </div>
            <div className="card-value-dashboard">{card.value}</div>
          </div>
        ))}
      </div>
      
      {/* Pending Applications */}
      <div className="flex flex-col gap-2 mt-4">
        <h1 className="basic-title mb-4">
          Pending Applications
        </h1>
      </div>
      
      <div>
        <Datatable
          tabledata={tabledata}
          columns={columns}
          pageSize={5}
        />
      </div>
    </div>
  );
};

export default VerifierDashboard;
