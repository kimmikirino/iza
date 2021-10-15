import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/home'
import More from './pages/more'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/iza">
          <Home />
        </Route>
        <Route path="/mais">
          <More />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
