import "./App.css";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Movie from "./Components/Movie";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }} className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Movie />
          </Route>
          <Route exact path="/Search">
            <Search />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );  
}

export default App;
