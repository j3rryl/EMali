import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import axios from "axios";
import { useEffect, useState } from "react";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [user, setUsers]=useState([])
  useEffect(() => {
    async function fetchUsers(){
      const  response =  await axios.get(
          "http://localhost:3001/api/property/all"
      );
      console.log(response.data)
      setUsers(response.data)
  }
  fetchUsers()
}, []);
  const columns = [
    { field: "property_id", headerName: "ID", flex: 0.5 },
    {
      field: "property_name",
      headerName: "Property Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    
    {
      field: "price",
      headerName: "Price",
      flex: 1,
    },
    {
      field: "type",
      headerName: "Type",
      flex: 1,
    },
    {
      field: "offer",
      headerName: "Offer",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
    },
    {
      field: "furnished",
      headerName: "Furnished",
      flex: 1,
    },
    {
      field: "carpet_area",
      headerName: "Carpet Area",
      flex: 1,
    },
    {
      field: "age",
      headerName: "Age",
      flex: 1,
    },
    {
      field: "total_floors",
      headerName: "Total Floors",
      flex: 1,
    },
    {
      field: "deposite",
      headerName: "Deposit",
      flex: 1,
    },
    {
      field: "bedroom",
      headerName: "Bedroom",
      flex: 1,
    },
    {
      field: "bathroom",
      headerName: "Bathroom",
      flex: 1,
    },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
    },
    
  ];

  return (
    <Box m="20px">
      <Header title="Properties" subtitle="Managing Properties" />
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
        <DataGrid checkboxSelection rows={user} columns={columns} 
        getRowId={(user) =>  user.property_id}/>
      </Box>
    </Box>
  );
};

export default Team;
