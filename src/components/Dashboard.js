import React, { useEffect, useState } from "react";
import BarGraph from "./BarGraph";
import LineGraph from "./LineGraph";
import { Link, useNavigate } from "react-router-dom";
import "../styles/dashboard.css";

const data = [
  {
    name: "JAN",
    debit: 4000,
    credit: 2400,
    amt: 2400,
  },
  {
    name: "FEB",
    debit: 3000,
    credit: 1398,
    amt: 2210,
  },
  {
    name: "MAR",
    debit: 2000,
    credit: 9800,
    amt: 2290,
  },
  {
    name: "APR",
    debit: 2780,
    credit: 3908,
    amt: 2000,
  },
  {
    name: "MAY",
    debit: 1890,
    credit: 4800,
    amt: 2181,
  },
  {
    name: "JUN",
    debit: 2390,
    credit: 3800,
    amt: 2500,
  },
  {
    name: "JUL",
    debit: 3490,
    credit: 4300,
    amt: 2100,
  },
];

function Dashboard() {
  const [role, setRole] = useState("");
  //let role = localStorage.getItem("user-role");
  let navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  useEffect(() => {
    setRole(localStorage.getItem("user-role"));
  }, []);

  return (
    <div>
      <Link to="/" className="dashboard__logout" onClick={logout}>
        Logout
      </Link>
      <div className="dashboard__content">
        {role === "ROLE_FULLACCESS" ? (
          <LineGraph data={data} dataKey1="credit" dataKey2="debit" />
        ) : (
          <BarGraph data={data} dataKey1="credit" dataKey2="debit" />
        )}
      </div>
    </div>
  );
}

export default Dashboard;
