import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <main role='main' aria-labelledby='dashboard'>
      <Outlet />
    </main>
  );
};

export default Dashboard;