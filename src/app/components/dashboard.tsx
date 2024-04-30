import React from "react";

const Dashboard: React.FC = () => {
  const [notifications, setNotifications] = React.useState(0);
  return (
    <div>
      <h1>Welcome to your dashboard</h1>
      <h2>You have {notifications} new notifications</h2>
    </div>
  );
};

export default Dashboard;
