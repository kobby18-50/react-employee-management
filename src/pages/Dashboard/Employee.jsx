import EmployeeCard from "../../components/EmployeeCard";
import { EmployeeData } from "../../data/EmployeeData";
import { FiEdit2 } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { BsSpeedometer2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";

const Employee = () => {
  const [filter,setFilter] = useState('all')
  return (
    <main>
      <div className="h-[8%] pt-10 pl-14">
        <div className="flex gap-4">
          <div className="border rounded-lg w-[50%]">
            <div className="p-2 flex space-x-10">
              <span className="pt-3 text-lg text-bold">
                <BsSpeedometer2 />
              </span>

              <input
                type="text"
                name=""
                placeholder="Search Employees"
                className="input w-full focus:border-none"
              />
            </div>
          </div>

          <div className="mt-3">
            <Link to={"/admin/dashboard/add-employee"}>
              <button className="btn btn-accent">Add employee</button>
            </Link>
          </div>
        </div>
      </div>
      {/* Card for employees */}
      <EmployeeCard />

      {/* Employee table */}

     <div className="flex space-x-10">
      <input type="radio" className="radio w-[20px] h-[20px]" />
     <h1 className="font-bold mt-5 cursor-pointer ml-14">All Employees</h1>
      <h1 className="font-bold mt-5 cursor-pointer"> Developers</h1>
      <h1 className="font-bold mt-5 cursor-pointer"> Support</h1>
     </div>

      <div className="overflow-x-auto ml-14">
        <table className="table table-zebra w-[80%]">
          <thead>
            <tr>
              <th></th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Date Of Birth</th>
              <th>Position</th>
              <th>Projects</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {EmployeeData.map((employee, index) => (
              <tr key={index}>
                <th>{employee.id}</th>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.phone}</td>
                <td>{employee.dob}</td>
                <td>{employee.role}</td>
                <td>{employee.projects}</td>

                <td className="flex space-x-10">
                  <Link to={`/admin/dashboard/employee/${employee.id}`}>
                    <span className="text-warning btn">
                      <FiEdit2 />
                    </span>
                  </Link>
                  <span className="text-error btn">
                    <AiFillDelete />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Employee;
