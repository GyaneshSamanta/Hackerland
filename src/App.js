import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./Pages/Main";
import Multi from "./Pages/Multi";

import Single from "./Pages/Single";

export default function App() {
  return (
    <div classname="App">
      <Router>
        <div className="bg-background-primary">
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/Single">
              <Single />
            </Route>
            <Route exact path="/Multi">
              <Multi />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
