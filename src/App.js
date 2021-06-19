import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TopPage from './pages/TopPage'
import SecondPage from './pages/SecondPage'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={TopPage} />
        <Route exact path='/SecondPage' component={SecondPage} />
      </Switch>
    </Router>
  );
}

export default App;