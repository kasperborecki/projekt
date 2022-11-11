import './App.css';

import Navbar from './Components/Navbar';
import Logowanie from './podstrony/Logowanie'
import Taski from './podstrony/Taski';
import Rejestracja from './podstrony/Rejestracja';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';





function App() {
  
  return(
  <Router>
  <div className="App">
    <Navbar/>
    <div className="content">
      <Switch>
        <Route exact path="/">
          <Taski />
        </Route>
        <Route path="/Logowanie">
          <Logowanie />
        </Route>
        <Route path="/Rejestracja">
          <Rejestracja />
        </Route>
      </Switch>
    </div>
  </div>
</Router>
);
};

export default App;
