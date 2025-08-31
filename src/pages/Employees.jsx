import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, People, Apps, ShowChart } from "@mui/icons-material";
import { PersonalInformation } from "@/components/PersonalInformation";
// import '../pages/Dashboard/index.css';
import Datatable from "@/components/Datatable";
import { FaUsers, FaFingerprint, FaHourglassHalf, FaCalendarWeek } from 'react-icons/fa';
import React, { useState } from 'react';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

const Employees = () => {
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

  // Add linkCopied to your initial data for each row
  const initialTableData = [
    { id: 1, name: 'Aarav Sharma', contact: '9876543210', pending: '5', onlineId: '7757845', services: 5, linkCopied: true },
    { id: 2, name: 'Emily Johnson', contact: '9123456780', pending: '4', onlineId: '7757845', services: 4, linkCopied: false },
    { id: 3, name: 'Rohan Patel', contact: '9988776655', pending: '5', onlineId: '7757845', services: 5, linkCopied: false },
    { id: 4, name: 'Sophia Williams', contact: '9012345678', pending: '5', onlineId: '7757845', services: 5, linkCopied: false },
    { id: 5, name: 'Aditya Dixit', contact: '9876501234', pending: '5', onlineId: '7757845', services: 5, linkCopied: false },
    { id: 6, name: 'Olivia Brown', contact: '9765432109', pending: '5', onlineId: '7757845', services: 1, linkCopied: false },
    { id: 7, name: 'Karan Mehta', contact: '9321456789', pending: '5', onlineId: '7757845', services: 5, linkCopied: false },
  ];
  
  

  const [tabledata, setTabledata] = useState(initialTableData);

  const handleCopyLink = (id) => {
    setTabledata(tabledata =>
      tabledata.map(row =>
        row.id === id ? { ...row, linkCopied: true } : row
      )
    );
  };

  const columns = [
    { 
      field: 'name', 
      headerName: 'Name', 
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
      field: 'contact', 
      headerName: 'Contact No.', 
      flex: 1, 
      minWidth: 120,
      headerAlign: 'left',
      renderCell: (params) => (
        <div className="datatable-cell-content">
          {params.row.contact}
        </div>
      ) 
    },
    { 
      field: 'pending', 
      headerName: 'Pending Cases', 
      flex: 1, 
      minWidth: 120,
      headerAlign: 'left',
      renderCell: (params) => (
        <div className="datatable-cell-content">
          {params.row.pending}
        </div>
      ) 
    },
    { 
      field: 'onlineId', 
      headerName: 'Online ID', 
      flex: 1, 
      minWidth: 100,
      headerAlign: 'left',
      renderCell: (params) => (
        <div className="datatable-cell-content">
          {params.row.onlineId}
        </div>
      ) 
    },
    { 
      field: 'services', 
      headerName: 'Services', 
      flex: 1, 
      minWidth: 80,
      headerAlign: 'left',
      renderCell: (params) => (
        <div className="datatable-cell-content">
          {params.row.services}
        </div>
      ) 
    }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="flex flex-col gap-2">
        <h1 className="dashboard-title" style={{color:"#4F378B"}}>
          Employees
        </h1>
      </div>

      <div>
        <Datatable
          tabledata={tabledata}
          columns={columns}
          pageSize={8}
        />
      </div>
    </div>
  );
};

export default Employees;