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

const IncomeList = () => {
  const { loading, error, data } = useQuery(GET_TRANSACTIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h2>Income Transactions</h2>
      <ul>
        {data.getTransactions
          .filter(transaction => transaction.type === 'income')
          .map(transaction => (
            <li key={transaction.id}>
              {transaction.title} - ${transaction.amount}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default IncomeList;
