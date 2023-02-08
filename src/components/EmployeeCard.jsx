import { Link } from "react-router-dom";
import { EmployeeData } from "../data/EmployeeData";
import User from "../photos/user1.png";

const EmployeeCard = () => {
  return (
    <main>
      <div className="grid grid-cols-3 ml-14">
        {EmployeeData.filter((employee, index) => index < 3).map(
          (employee, index) => (
            <div key={index}>
              <div className="card card-side w-64 bg-base-100 shadow-xl">
                <figure className="ml-3">
                  <img src={User} alt="user" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{employee.name}</h2>
                  <span className="border rounded-md p-2">
                    <span className="text-sm">Role : {employee.role}</span>
                    <br />
                    <span className="text-sm">
                      {employee.projects} projects
                    </span>
                  </span>

                  <Link to={`/admin/dashboard/employee/${employee.id}`}>
                    <button className=" btn btn-sm btn-accent">
                      View Profile
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </main>
  );
};

export default EmployeeCard;
