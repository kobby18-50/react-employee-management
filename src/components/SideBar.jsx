import { NavLink } from "react-router-dom";
import { SideBarData } from "../data/SideBarData";
import Logo from "../photos/logo.jpg";


const SideBar = () => {
    const activeNav = 'text-accent'
  return (
    <main className="h-screen">
      <figure>
        <img src={Logo} alt="logo" />
      </figure>

      {SideBarData.map((sidebar, index) => (
        <div key={sidebar.id}>
          <NavLink to={sidebar.path}
          className = {({isActive}) => isActive ? activeNav : '' }
          >
            <span className="flex border border-y-1 space-x-10 p-4 hover:text-white hover:bg-accent hover:duration-300">
              <div className="text-parcel-color"> {sidebar.icon} </div>
              <div>{sidebar.title}</div>
            </span>
          </NavLink>
        </div>
      ))}
    </main>
  );
};

export default SideBar;
