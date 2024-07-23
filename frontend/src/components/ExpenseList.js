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

const ExpenseList = () => {
  const { loading, error, data } = useQuery(GET_TRANSACTIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h2>Expense Transactions</h2>
      <ul>
        {data.getTransactions
          .filter(transaction => transaction.type === 'expense')
          .map(transaction => (
            <li key={transaction.id}>
              {transaction.title} - ${transaction.amount}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
