import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_TRANSACTIONS = gql`
  query GetTransactions {
    getTransactions {
      id
      title
      category
      amount
      date
      type
    }
  }
`;

const Dashboard = () => {
  const { loading, error, data } = useQuery(GET_TRANSACTIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const totalIncome = data.getTransactions
    .filter(transaction => transaction.type === 'income')
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalExpenses = data.getTransactions
    .filter(transaction => transaction.type === 'expense')
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const balance = totalIncome - totalExpenses;

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
