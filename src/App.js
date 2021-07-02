import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Navbar from "./componets/Navbar";
import { FieldState } from "./context/field/FieldState";
import { GlobalState } from "./context/global/GlobalState";
import ChosePlants from "./pages/ChosePlants";
import { PlantState } from "./context/plant/PlantState";

function App() {
  return (
    <div>
      <GlobalState>
        <PlantState>
          <FieldState>
            <BrowserRouter>
              <Navbar />
              <Switch>
                <Route path={"/"} exact component={Home} />
                <Route path={"/shop"} exact component={Shop} />
                <Route path={"/chosePlant"} exact component={ChosePlants} />
              </Switch>
            </BrowserRouter>
          </FieldState>
        </PlantState>
      </GlobalState>
    </div>
  );
}

export default App;
