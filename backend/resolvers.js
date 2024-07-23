const transactions = [];
const resolvers = {
  Query: {
    getTransactions: () => transactions,
  },
  Mutation: {
    addTransaction: (_, { title, category, amount, date, type }) => {
      const transaction = { id: transactions.length + 1, title, category, amount, date, type };
      transactions.push(transaction);
      return transaction;
    },
    deleteTransaction: (_, { id }) => {
      const index = transactions.findIndex(transaction => transaction.id === Number(id));
      if (index > -1) {
        const [deletedTransaction] = transactions.splice(index, 1);
        return deletedTransaction;
      }
    },
  },
};

module.exports = resolvers;
