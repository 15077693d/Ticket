import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Ticket,Campaign} from "./pages/index"

export default function App() {
  return (
      <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/campaign/:campaignAddress">
            <Ticket />
          </Route>
           <Route path="/">
            <Campaign />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
