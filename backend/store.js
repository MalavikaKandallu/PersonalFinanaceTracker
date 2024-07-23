import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const financeReducer = (state = { totalIncome: 0, totalExpenses: 0, balance: 0 }, action) => {
  switch (action.type) {
    case 'ADD_INCOME':
      return { ...state, totalIncome: state.totalIncome + action.amount, balance: state.balance + action.amount };
    case 'ADD_EXPENSE':
      return { ...state, totalExpenses: state.totalExpenses + action.amount, balance: state.balance - action.amount };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  finance: financeReducer,
});

const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <YourMainComponent />
  </Provider>
);

export default App;
