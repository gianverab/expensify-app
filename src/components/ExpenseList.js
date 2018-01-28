import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = props => (
  <div>
    <h3>Expense list</h3>
    <p>{props.filters.text}</p>
    <p>{props.expenses.length}</p>
  </div>
);

const mapStateToProps = state => ({
  expenses: state.expenses,
  filters: state.filters,
});

export default connect(mapStateToProps)(ExpenseList);

