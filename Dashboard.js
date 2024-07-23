import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const { totalIncome, totalExpenses, balance } = useSelector(state => state.finance);

  return (
    <div>
      <h2>Finance Dashboard</h2>
      <p>Total Balance: ${balance}</p>
      <p>Total Income: ${totalIncome}</p>
      <p>Total Expenses: ${totalExpenses}</p>
    </div>
  );
};

export default Dashboard;
