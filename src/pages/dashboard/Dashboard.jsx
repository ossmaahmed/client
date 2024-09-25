import "./dashboard.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";

const Dashboard = () => {
  return (
    <>
      <Topbar />
      <div className="dashboardContainer">
        <Sidebar />
        <Feed />
      </div>
    </>
  );
};

export default Dashboard;
