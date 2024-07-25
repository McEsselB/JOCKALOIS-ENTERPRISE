import InfoBox from "../../../components/InfoBox";
import SalesChart from "../../../components/SalesChart";
import DealsList from "../../../components/DealsList";
import "./Dashboard.css";
import axios from "axios";

import userIcon2 from "../../../assets/images/user2.png";
import orderIcon from "../../../assets/images/order.png";
import salesIcon from "../../../assets/images/sales.png";
import pendingIcon from "../../../assets/images/pending.png";
import { useEffect, useState } from "react";

const Dashboard = () => {
  // const [width, setWidth] = useState(window.innerWidth);
  const [pageDetails, setPageDetails] = useState({
    totalUsers: 0,
    totalProducts: 0,
    totalSales: 0,
    pendingOrders: 0,
  });

  // function handleWidth() {
  //   setWidth(window.innerWidth);
  // }

  const fetchDisplayInfo = async () => {
    await axios
      .get("/api/admin/get-dashboard-info")
      .then((res) => {
        setPageDetails(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  // useEffect(() => {
  //   window.addEventListener("resize", handleWidth);

  //   return () => {
  //     window.removeEventListener("resize", handleWidth);
  //   };
  // }, []);

  useEffect(() => {
    fetchDisplayInfo();
  }, []);

  console.log(pageDetails);

  return (
    <div className="dashboard pb-10">
      <div className="dashboard-content">
        <main className="main-content">
          <h2 className="main-content h2">Dashboard</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            <InfoBox
              title="Total Users"
              value={pageDetails.totalUsers}
              percentage="8.5% Up from yesterday"
              icon={userIcon2}
            />
            <InfoBox
              title="Total Products"
              value={pageDetails.totalProducts}
              percentage="1.3% Up from past week"
              icon={orderIcon}
            />
            <InfoBox
              title="Total Sales"
              value={`$ ${pageDetails.totalSales}`}
              percentage="4.3% Down from yesterday"
              icon={salesIcon}
            />
            <InfoBox
              title="Pending Orders"
              value={pageDetails.pendingOrders}
              percentage="1.8% Up from yesterday"
              icon={pendingIcon}
            />
          </div>
          {/* <SalesChart />
          <div className="hidden sm:flex mt-10">
            <DealsList />
          </div> */}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
