import SideBar from "../../components/SideBar";
import SideBarRoutes from "../../components/SideBarRoutes";

const Dashboard = () => {
  return (
    <main className="grid grid-cols-6">
      {/* SideBar */}

      <section className="h-full">
        <SideBar />
      </section>

      <section className="col-span-5 border-r ml-2 shadow-lg ">
        <div className="h-full">
          <div className="h-[92%]">
            <SideBarRoutes />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
