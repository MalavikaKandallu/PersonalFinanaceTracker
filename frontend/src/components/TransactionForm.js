import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const ADD_TRANSACTION = gql`
  mutation AddTransaction($title: String!, $category: String!, $amount: Float!, $date: String!, $type: String!) {
    addTransaction(title: $title, category: $category, amount: $amount, date: $date, type: $type) {
      id
      title
      category
      amount
      date
      type
    }
  }
`;

const TransactionForm = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('income');
  const [addTransaction] = useMutation(ADD_TRANSACTION);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTransaction({ variables: { title, category, amount: parseFloat(amount), date, type } });
    setTitle('');
    setCategory('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Transaction</h2>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </label>
      <label>
        Category:
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
      </label>
      <label>
        Amount:
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      </label>
      <label>
        Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </label>
      <label>
        Type:
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </label>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
