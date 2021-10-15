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
    <Router >
      <Switch>
        <Route exact path={process.env.REACT_APP_ENV + '/'}>
          <Home />
        </Route>
        <Route path={process.env.REACT_APP_ENV + "/iza"}>
          <Home />
        </Route>
        <Route path={process.env.REACT_APP_ENV + "/mais"}>
          <More />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
