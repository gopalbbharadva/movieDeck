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
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import Authprovider from "./Contexts/Autcontext";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }} className="App">
      <Authprovider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Movie />
            </Route>
            <Route exact path="/Search">
              <Search />
            </Route>
            <Route exact path="/Signup">
              <Signup />
            </Route>
            <Route exact path="/Signin">
              <Signin />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Router>
      </Authprovider>
    </div>
  );
}

export default App;
