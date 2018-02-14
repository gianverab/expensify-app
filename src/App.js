import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import styled from 'styled-components';
import ExpenseDashboard from './components/ExpenseDashboard';
import AddExpense from './components/AddExpense';
import EditExpense from './components/EditExpense';
import HelpPage from './components/HelpPage';
import NotFoundPage from './components/NotFoundPage';
import Header from './components/Header';

const App = () => (
  <Router>
    <AppWrapper>
      <Header />
      <Switch>
        <Route exact path="/" component={ExpenseDashboard} />
        <Route path="/create" component={AddExpense} />
        <Route path="/edit/:id" component={EditExpense} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </AppWrapper>
  </Router>
);

export default App;

const AppWrapper = styled.div`
font-family: 'Open Sans', Arial, sans-serif;
font-weight: 300;
width: 100%;
max-width: 800px;
margin: 0 auto;
h1,h2,h3,h4,h5,h6 {
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 600;
}
`;
