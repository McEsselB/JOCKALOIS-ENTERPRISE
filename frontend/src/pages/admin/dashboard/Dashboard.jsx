import InfoBox from "../../../components/InfoBox";
import SalesChart from "../../../components/SalesChart";
import DealsList from "../../../components/DealsList";
import "./Dashboard.css";

import userIcon2 from "../../../assets/images/user2.png";
import orderIcon from "../../../assets/images/order.png";
import salesIcon from "../../../assets/images/sales.png";
import pendingIcon from "../../../assets/images/pending.png";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWidth() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWidth);

    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);

  return (
    <div className="dashboard pb-10">
      <div className="dashboard-content">
        <main className="main-content">
          <h2 className="main-content h2">Dashboard</h2>
          <div
            className="gap-8 flex flex-row flex-wrap justify-between"
            style={{ width: width - 300 }}
          >
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
          <SalesChart width={width} />
          <div className="hidden sm:flex mt-10">
            <DealsList width={width} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
