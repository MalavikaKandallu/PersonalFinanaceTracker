const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
  }

  type Transaction {
    id: ID!
    title: String!
    category: String!
    amount: Float!
    date: String!
    type: String!
  }

  type Query {
    getTransactions: [Transaction]
  }

  type Mutation {
    addTransaction(title: String!, category: String!, amount: Float!, date: String!, type: String!): Transaction
    deleteTransaction(id: ID!): Transaction
  }
`;

module.exports = typeDefs;
