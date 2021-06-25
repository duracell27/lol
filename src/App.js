import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Navbar from "./componets/Navbar";
import { FieldState } from "./context/FieldState";

function App() {
  return (
    <div>
      <FieldState>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path={"/"} exact component={Home} />
            <Route path={"/shop"} exact component={Shop} />
          </Switch>
        </BrowserRouter>
      </FieldState>
    </div>
  );
}

export default App;
