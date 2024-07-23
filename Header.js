import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Personal Finance Manager</h1>
    <nav>
      <Link to="/">Dashboard</Link>
      <Link to="/income">Income</Link>
      <Link to="/expenses">Expenses</Link>
      <Link to="/add-transaction">Add Transaction</Link>
      <Link to="/login">Login</Link>
    </nav>
  </header>
);

export default Header;
