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

const Client = () => {
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
    { id: 1, name: 'Samsung', contact: '36', pending: 'Samsung', onlineId: '7757845', services: 5, linkCopied: true },
    { id: 2, name: 'Apple', contact: '48', pending: 'Apple', onlineId: '7757845', services: 4, linkCopied: false },
    { id: 3, name: 'Google', contact: '55', pending: 'Samsung', onlineId: '7757845', services: 5, linkCopied: false },
    { id: 4, name: 'HDFC', contact: '320', pending: 'Samsung', onlineId: '7757845', services: 5, linkCopied: false },
    { id: 5, name: 'Axis', contact: '1445298996', pending: 'Samsung', onlineId: '7757845', services: 5, linkCopied: false },
    { id: 6, name: 'Microsoft', contact: '1445298996', pending: 'Samsung', onlineId: '7757845', services: 1, linkCopied: false },
    { id: 7, name: 'JBL', contact: '1445298996', pending: 'Samsung', onlineId: '7757845', services: 5, linkCopied: false },
    { id: 8, name: 'Boat', contact: '1445298996', pending: 'Samsung', onlineId: '7757845', services: 8, linkCopied: false },
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
    },
    {
      field: 'link',
      headerName: 'Link',
      flex: 1,
      minWidth: 120,
      headerAlign: 'left',
      sortable: false,
      renderCell: (params) => {
        const { linkCopied, id } = params.row;
        return linkCopied ? (
          <Link className="datatable-link-copied">
            Link copied
          </Link>
        ) : (
          <Link
            className="datatable-link"
            onClick={() => handleCopyLink(id)}
          >
            Copy link
          </Link>
        );
      },
    },
    {
      field: 'edit',
      headerName: 'Edit',
      flex: 0.5,
      minWidth: 60,
      headerAlign: 'left',
      sortable: false,
      renderCell: (params) => (
        <IconButton 
          className="datatable-edit-button"
          onClick={() => handleEditClick(params.row)}
        >
          <EditOutlinedIcon className="datatable-edit-icon" />
        </IconButton>
      ),
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="flex flex-col gap-2">
        <h1 className="dashboard-title">
          Clients
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

export default Client;