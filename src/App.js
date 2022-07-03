import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./Pages/Main";
import Multi from "./Pages/Multi";
import Single from "./Pages/Single";

const App = () => {
  return (
    <div classname="App">
      <Router>
        <div className="bg-background-primary">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Main}></Route>
            <Route path="/Single" component={Single}></Route>
            <Route path="/Multi" component={Multi}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
