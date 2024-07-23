import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import IncomeList from './components/IncomeList';
import ExpenseList from './components/ExpenseList';
import TransactionForm from './components/TransactionForm';
import Login from './components/Login';
import './App.css';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" component={Dashboard} exact />
      <Route path="/income" component={IncomeList} />
      <Route path="/expenses" component={ExpenseList} />
      <Route path="/add-transaction" component={TransactionForm} />
      <Route path="/login" component={Login} />
    </Switch>
  </Router>
);

export default App;
