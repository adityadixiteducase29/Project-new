import Datatable from "@/components/Datatable";
import React, { useState, useEffect } from 'react';
import { Button } from "reactstrap";
import { PlusCircle } from "lucide-react";
import AddEmployee from "./AddEmployee/AddEmployee";
import EditEmployee from "./AddEmployee/EditEmployee";
import apiService from "../../services/api";
import { toast } from 'react-toastify';

const Employees = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [editModal, setEditModal] = useState(false);
  const toggleEdit = () => setEditModal(!editModal);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [refreshFlag, setRefreshFlag] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);

  const [tabledata, setTabledata] = useState([]);

  // Fetch employees and dashboard stats
  const fetchData = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('auth_token');
      if (!token) return;

      apiService.setToken(token);
      
      // Fetch employees and dashboard stats in parallel
      const [employeesResponse] = await Promise.all([
        apiService.getAllEmployees(),
      ]);

      if (employeesResponse.success) {
        setEmployees(employeesResponse.data);
        setTabledata(employeesResponse.data);
      } else {
        console.error('Failed to fetch employees:', employeesResponse.message);
        toast.error('Failed to fetch employees');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  // Fetch data on component mount and when refreshFlag changes
  useEffect(() => {
    fetchData();
  }, [refreshFlag]);

  const handleEditClick = (employee) => {
    setSelectedEmployee(employee);
    toggleEdit();
  };


  const columns = [
    { 
      field: 'name', 
      headerName: 'Employee Name', 
      flex: 1, 
      minWidth: 150,
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
      minWidth: 200,
      headerAlign: 'left',
      renderCell: (params) => (
        <div className="datatable-cell-content">
          {params.row.email}
        </div>
      ) 
    },
    { 
      field: 'assigned_company_ids', 
      headerName: 'Assigned Companies', 
      flex: 1, 
      minWidth: 200,
      headerAlign: 'left',
      renderCell: (params) => (
        <div className="datatable-cell-content">
          {params.row.assigned_company_ids ? params.row.assigned_company_ids.length : 0} companies
        </div>
      ) 
    },
    { 
      field: 'status', 
      headerName: 'Status', 
      flex: 1, 
      minWidth: 120,
      headerAlign: 'left',
      renderCell: (params) => (
        <div className="datatable-cell-content">
          <span style={{
            padding: '4px 6px',
            borderRadius: '4px',
            fontSize: '11px',
            fontWeight: '500',
            backgroundColor: params.row.status === 'active' ? '#e8f5e8' : '#ffe8e8',
            color: params.row.status === 'active' ? '#2e7d32' : '#d32f2f',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxWidth: '100%',
            display: 'inline-block'
          }}>
            {params.row.status === 'active' ? 'Active' : 'Inactive'}
          </span>
        </div>
      ) 
    },
    { 
      field: 'created_at', 
      headerName: 'Created Date', 
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
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      minWidth: 100,
      headerAlign: 'left',
      renderCell: (params) => (
        <div className="datatable-cell-content">
          <Button
            size="sm"
            color="primary"
            outline
            onClick={() => handleEditClick(params.row)}
            style={{
              padding: '4px 8px',
              fontSize: '12px',
              borderRadius: '4px'
            }}
          >
            Edit
          </Button>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="flex gap-2 justify-between align-center">
        <h1 className="dashboard-title mb-0">
          Employees
        </h1>
        <Button
          className="custom-primary-button"
          onClick={toggle}
        >
          <PlusCircle size={17}/>
          Add Employee
        </Button>
      </div>

      <div>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <div>Loading employees...</div>
          </div>
        ) : (
          <Datatable
            tabledata={tabledata}
            columns={columns}
            pageSize={8}
          />
        )}
      </div>
      <AddEmployee modal={modal} toggle={toggle} refreshFlag={refreshFlag} setRefreshFlag={setRefreshFlag} />
      <EditEmployee 
        modal={editModal} 
        toggle={toggleEdit} 
        refreshFlag={refreshFlag} 
        setRefreshFlag={setRefreshFlag}
        employeeData={selectedEmployee}
      />
    </div>
  );
};

export default Employees;