import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import setStore from './store/setStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = setStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

store.dispatch(addExpense({
  description: 'Water bill',
  amount: 1000,
}));

store.dispatch(addExpense({
  description: 'Gas bill',
  amount: 1500,
}));

store.dispatch(setTextFilter('gas'));

setTimeout(() => {
  store.dispatch(setTextFilter('water'));
}, 3000);

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
