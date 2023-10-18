import React, { useState } from "react";
import adminLogo from "../../assets/admin.jpeg";
import Student from "./Student";
import Staff from "./Staff";
import Attendance from "./Attendance";
import CollectFees from "./CollectFees";
import Performance from "./Performance";
import Announcement from "./Announcement";
import ChangePassword from "./ChangePassword";

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
function Dashboard() {
  const [obj, setObj] = useState({
    dashboard: true,
    student: false,
    staff: false,
    attendance: false,
    performance: false,
    collectFees: false,
    announcement: false,
    changePassword: false,
  });
  const [pages, setPages] = useState("Dashboard");
  const [currentSection, setCurrentSection] = useState(false);
  return (
    <div>
      <div className=" bg-slate-400 flex">
        <div className="bg-gray-300  h-screen   lg:w-[300px]">
          <div className="">
            <div className=" min-h-full flex justify-center items-centre font-bold">
              <img src={adminLogo} alt="Admin Logo" />
            </div>
          </div>
          <div className="font-bold grid gap-4 py-2 md:px-5 md:text-lg text-xs">
            <div
              className="rounded-md  hover:bg-amber-400 p-1"
              onClick={() => {
                setObj({
                  dashboard: true,
                  student: false,
                  staff: false,
                  attendance: false,
                  performance: false,
                  collectFees: false,
                  announcement: false,
                  changePassword: false,
                });
                setPages("Dashboard");
              }}
            >
              <button className=" ">Dashboard</button>
            </div>
            <div
              className="rounded-md  hover:bg-amber-400 p-1"
              onClick={() => {
                setObj({
                  dashboard: false,
                  student: true,
                  staff: false,
                  attendance: false,
                  performance: false,
                  collectFees: false,
                  announcement: false,
                  changePassword: false,
                });
                setPages("Student");
              }}
            >
              <button className="  ">Student</button>
            </div>
            <div
              className="rounded-md  hover:bg-amber-400 p-1"
              onClick={() => {
                setObj({
                  dashboard: false,
                  student: false,
                  staff: true,
                  attendance: false,
                  performance: false,
                  collectFees: false,
                  announcement: false,
                  changePassword: false,
                });
                setPages("Staff");
              }}
            >
              <button className="  ">Staff</button>
            </div>
            <div
              className="rounded-md  hover:bg-amber-400 p-1"
              onClick={() => {
                setObj({
                  dashboard: false,
                  student: false,
                  staff: false,
                  attendance: true,
                  performance: false,
                  collectFees: false,
                  announcement: false,
                  changePassword: false,
                });
                setPages("Attendance");
              }}
            >
              <button className=" ">Attendance</button>
            </div>
            <div
              className="rounded-md  hover:bg-amber-400 p-1"
              onClick={() => {
                setObj({
                  dashboard: false,
                  student: false,
                  staff: false,
                  attendance: false,
                  performance: true,
                  collectFees: false,
                  announcement: false,
                  changePassword: false,
                });
                setPages("Performance");
              }}
            >
              <button className="  ">Performance</button>
            </div>
            <div
              className="rounded-md  hover:bg-amber-400 p-1"
              onClick={() => {
                setObj({
                  dashboard: false,
                  student: false,
                  staff: false,
                  attendance: false,
                  performance: false,
                  collectFees: true,
                  announcement: false,
                  changePassword: false,
                });
                setPages("CollectFees");
              }}
            >
              <button className="  ">Collect Fees</button>
            </div>
            <div
              className="rounded-md  hover:bg-amber-400 p-1"
              onClick={() => {
                setObj({
                  dashboard: false,
                  student: false,
                  staff: false,
                  attendance: false,
                  performance: false,
                  collectFees: false,
                  announcement: true,
                  changePassword: false,
                });
                setPages("Announcement");
              }}
            >
              <button className="  ">Announcement</button>
            </div>
            <div
              className="rounded-md  hover:bg-amber-400 p-1"
              onClick={() => {
                setObj({
                  dashboard: false,
                  student: false,
                  staff: false,
                  attendance: false,
                  performance: false,
                  collectFees: false,
                  announcement: false,
                  changePassword: true,
                });
                setPages("ChangePassword");
              }}
            >
              <button className="contents  ">Change Password</button>
            </div>
          </div>
        </div>
        <div className=" w-[80%] bg-gray-400">
          <div className="flex gap-4">
            <h1 className="w-[80%] p-2 justify-start">Home Dashboard</h1>
            <h1 className="justify-end bg-purple-500 p-2">Amad ullah</h1>
          </div>
          <div className="mt-10"></div>
          <div className="sections">
            {obj.dashboard && (
              <div className="md:flex gap-10 px-5 justify-between ">
                <div className="bg-green-500 w-full h-[250px] rounded-3xl font-bold grid">
                  <h1 className="flex justify-center items-center ">
                    Students
                  </h1>
                  <h1 className="flex justify-center items-end text-lg">
                    Total Students: 300
                  </h1>
                  <div className="flex justify-center bg-green-800 mt-auto">
                    <h1
                      className="cursor-pointer"
                      onClick={() => {
                        setObj({
                          dashboard: false,
                          student: true,
                          staff: false,
                          attendance: false,
                          performance: false,
                          collectFees: false,
                          announcement: false,
                          changePassword: false,
                        });
                        setPages("Student");
                      }}
                    >
                      More Info
                    </h1>
                  </div>
                </div>
                <div className="bg-purple-600 w-full h-[250px] rounded-3xl font-bold grid ">
                  <h1 className="flex justify-center items-center ">
                    Teachers
                  </h1>
                  <h1 className="flex justify-center items-end text-lg">
                    Total Teachers: 30
                  </h1>
                  <div className="flex justify-center bg-purple-800 mt-auto">
                    <h1
                      className="cursor-pointer"
                      onClick={() => {
                        setObj({
                          dashboard: false,
                          student: false,
                          staff: true,
                          attendance: false,
                          performance: false,
                          collectFees: false,
                          announcement: false,
                          changePassword: false,
                        });
                        setPages("Student");
                      }}
                    >
                      More Info
                    </h1>
                  </div>
                </div>
              </div>
            )}
            {obj.student && <Student />}
            {obj.staff && <Staff />}
            {obj.attendance && <Attendance />}
            {obj.performance && <Performance />}
            {obj.collectFees && <CollectFees />}
            {obj.announcement && <Announcement />}
            {obj.changePassword && <ChangePassword />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
