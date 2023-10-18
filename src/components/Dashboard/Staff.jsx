import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
function Staff() {
  const columns = [
    { field: "id", headerName: "S/N", width: 90 },
    {
      field: "admissionNO",
      headerName: "Admission No",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "class",
      headerName: "Class",
      flex: 1,
    },
    {
      field: "gender",
      headerName: "Gender",
      flex: 1,
    },
    {
      field: "edit",
      headerName: "Edit",
      flex: 1,
      renderCell: (params) => (
        <div>
          <button
            className="bg-green-600 p-3 rounded-2xl text-white font-bold text-md hover:scale-125"
            onClick={() => console.log(params.row)}
          >
            Edit
          </button>
        </div>
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      flex: 1,

      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
      renderCell: (params) => (
        <div>
          <button
            className="bg-red-700 p-3 rounded-2xl text-white font-bold text-md hover:scale-125"
            onClick={() => console.log(params.row)}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  const rows = [
    { id: 1, admissionNO: "Snow", name: "Jon", class: 35, gender: "Male" },
  ];
  return (
    <div>
      <div className="dashboard">
        <h1 className="mt-5 font-bold">Staff</h1>
        <div className="bg-slate-400 flex p-2 rounded-md gap-2">
          <h3 className="bg-slate-50 p-1">All Students</h3>
          <h3 className="bg-slate-50 p-1">Add Shortcut</h3>
          <h3 className="bg-slate-50 p-1">Upload Students</h3>
        </div>
        <h3>Registration students</h3>
        <div className="flex gap-2">
          <h4>Show</h4>
          <h4>entries</h4>
        </div>
        <div>
          <Box sx={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              pageSizeOptions={[5]}
              checkboxSelection
              disableRowSelectionOnClick
            />
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Staff;
