import React, { useContext } from "react";
import Header from "./Header";
// import { UserContext } from "./UserContext";

const Dashboard = () => {
//   const usercontext = useContext(UserContext);
//   console.log("data===>",usercontext.data);

  return (
    <div>
      <Header />
      <div>
        <h1>Welcome!!!!!</h1>
      </div>
    </div>
  );
};

export default Dashboard;
