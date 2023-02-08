import Overview from "../pages/Dashboard/Overview";
import Employee from "../pages/Dashboard/Employee";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import AddEmployee from "./AddEmployee";
import EmployeeDetail from "./EmployeeDetail";
const SideBarRoutes = () => {
  return (
    <main>
      <Routes>
        <Route path={"/overview"} element={<Overview />} />
        <Route path={"/employee"} element={<Employee />} />
        <Route path={"/employee/:id"} element={<EmployeeDetail />} />
        <Route path={"/"} element={<Login />} />
        <Route path={"/add-employee"} element={<AddEmployee />} />
      </Routes>
    </main>
  );
};

export default SideBarRoutes;
