import { Switch, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./Pages/Main";
import Details from "./Pages/Multi";
import Single from "./Pages/Single";

export default function App() {
  return (
    <div classname="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/Single-player">
            <Single />
          </Route>
          <Route exact path="/Multi-player">
            <Details />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
