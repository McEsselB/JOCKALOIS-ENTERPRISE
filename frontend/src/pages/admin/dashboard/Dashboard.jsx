import InfoBox from "../../../components/InfoBox";
import SalesChart from "../../../components/SalesChart";
import DealsList from "../../../components/DealsList";
import "./Dashboard.css";

import userIcon2 from "../../../assets/images/user2.png";
import orderIcon from "../../../assets/images/order.png";
import salesIcon from "../../../assets/images/sales.png";
import pendingIcon from "../../../assets/images/pending.png";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <main className="main-content">
          <h2 className="main-content h2">Dashboard</h2>
          <div className="info-boxes">
            <InfoBox
              title="Total Users"
              value="40,689"
              percentage="8.5% Up from yesterday"
              icon={userIcon2}
            />
            <InfoBox
              title="Total Orders"
              value="10,293"
              percentage="1.3% Up from past week"
              icon={orderIcon}
            />
            <InfoBox
              title="Total Sales"
              value="$89,000"
              percentage="4.3% Down from yesterday"
              icon={salesIcon}
            />
            <InfoBox
              title="Total Pending"
              value="2,040"
              percentage="1.8% Up from yesterday"
              icon={pendingIcon}
            />
          </div>
          <SalesChart />
          <DealsList />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
