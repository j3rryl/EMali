import { Box, Button, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import axios from "axios";
import { useEffect, useState } from "react";


import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import {
  GridRowModes,
  GridActionsCellItem,
} from '@mui/x-data-grid';
import * as React from 'react';

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [user, setUsers]=useState([])
  useEffect(() => {
    async function fetchUsers(){
      const  response =  await axios.get(
          "http://localhost:3001/api/user/all"
      );
      console.log(response.data)
      setUsers(response.data)
  }
  fetchUsers()
}, []);
// const [rows, setRows] = user;

  // const handleRowEditStart = (
  //   params: GridRowParams,
  //   event: MuiEvent<React.SyntheticEvent>,
  // ) => {
  //   event.defaultMuiPrevented = true;
  // };

  // const handleRowEditStop: GridEventListener<'rowEditStop'> = (params, event) => {
  //   event.defaultMuiPrevented = true;
  // };

  const handleEditClick = (id) => () => {
    console.log(id)
  };

  const handleSaveClick = (id) => () => {
    console.log(id)
  };

  const handleDeleteClick = (id) => () => {
    console.log(id)
    // setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id) => () => {
    console.log(id)
  };
  const columns = [
    { field: "user_id", headerName: "ID", flex: 0.5 },
    {
      field: "first_name",
      editable:true,
      headerName: "First Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "last_name",
      headerName: "Last Name",
      flex: 1,
      cellClassName: "name-column--cell",
      editable:true,
    },
    
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      editable:true,
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = true;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
    
  ];

  return (
    <Box m="20px">
      <Header title="Users" subtitle="Managing the Users" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid editMode="row" checkboxSelection rows={user} columns={columns} 
        getRowId={(user) =>  user.user_id} 
        />
      </Box>
    </Box>
  );
};

export default Team;
