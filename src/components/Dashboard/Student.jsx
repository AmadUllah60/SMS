import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import ClearIcon from "@mui/icons-material/Clear";
import { useForm } from "react-hook-form";
function Student() {
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

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    border: "2px solid #000",
    boxShadow: 24,
    bgcolor: "yellow",
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { register, handleSubmit } = useForm();

  const addStudent = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="dashboard">
        <div className="bg-gray-500 h-[110px] flex justify-center items-center">
          <h1 className="font-bold">Students</h1>
        </div>
        <div className="bg-yellow-300 h-[50px] flex justify-center items-center">
          <Button onClick={handleOpen}>Add Student</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style} className="rounded-md  w-[75%] grid overflow-auto">
              <form onSubmit={handleSubmit(addStudent)}>
                <div className="flex justify-end" onClick={handleClose}>
                  <ClearIcon />
                </div>
                <div
                  className="grid mb-2 justify-between gap-3 gap-y-3 w-full
               sm:flex"
                >
                  <input
                    type="text"
                    className="rounded-lg p-2 m-2 sm:m-0 w-full"
                    placeholder="Name"
                    {...register("std_name", { required: true })}
                  />

                  <input
                    type="number"
                    className="rounded-lg p-2 m-2 sm:m-0 w-full"
                    placeholder="Class"
                    {...register("std_class", { required: true })}
                  />
                </div>
                <div className="grid mb-2 justify-between gap-y-3 gap-x-3 sm:flex">
                  <input
                    type="text"
                    className="rounded-lg p-2 m-2 sm:m-0 w-full"
                    placeholder="Section"
                    {...register("std_section", { required: true })}
                  />
                  <input
                    type="text"
                    className="rounded-lg p-2 m-2 sm:m-0 w-full"
                    placeholder="Admission Number"
                    {...register("std_admission_number", { required: true })}
                  />
                </div>
                <div className="grid mb-2 justify-between gap-y-3 gap-x-3 sm:flex">
                  <input
                    type="text"
                    className="rounded-lg p-2 m-2 sm:m-0 w-full"
                    placeholder="Gender"
                    {...register("std_gender", { required: true })}
                  />
                  <input
                    type="text"
                    className="rounded-lg p-2 m-2 sm:m-0 w-full"
                    placeholder="Date Of Birth"
                    {...register("std_dob", { required: true })}
                  />
                </div>
                <div className="grid mb-2 justify-between gap-y-3 gap-x-3 sm:flex">
                  <input
                    type="text"
                    className="rounded-lg p-2 m-2 sm:m-0 w-full"
                    placeholder="Address"
                    {...register("std_address", { required: true })}
                  />
                  <input
                    type="text"
                    className="rounded-lg p-2 m-2 sm:m-0 w-full"
                    placeholder="Phone Number"
                    {...register("std_phone_no", { required: true })}
                  />
                </div>
                <div className="grid mb-2 justify-between gap-y-3 gap-x-3 sm:flex">
                  <input
                    type="text"
                    className="rounded-lg p-2 m-2 sm:m-0 w-full"
                    placeholder="Guardian Phone Number"
                    {...register("std_guardian_phone_no", { required: true })}
                  />
                  <input
                    type="text"
                    className="rounded-lg p-2 m-2 sm:m-0 w-full"
                    placeholder="Subjects"
                    {...register("std_subjects", { required: true })}
                  />
                </div>

                <div className="flex justify-center items-center gap-3 py-5">
                  <button className="bg-red-600 p-3 rounded-md " type="button">
                    Cancel
                  </button>
                  <button className="bg-red-600 p-3 rounded-md" type="submit">
                    Add Student
                  </button>
                </div>
              </form>
            </Box>
          </Modal>
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

export default Student;
