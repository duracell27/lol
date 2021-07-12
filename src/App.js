import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Navbar from "./componets/Navbar";
import { FieldState } from "./context/field/FieldState";
import { GlobalState } from "./context/global/GlobalState";
import ChosePlants from "./pages/ChosePlants";
import { PlantState } from "./context/plant/PlantState";
import Werehouse from './pages/Werehouse'
import { WerehouseState } from "./context/werehouse/WerehouseState";
import cls from './app.module.css'

function App() {
  return (
    <div className={cls.container}>
      <GlobalState>
          <FieldState>
        <WerehouseState>
        <PlantState>

            <BrowserRouter>
              <Navbar />
              <Switch>
                <Route path={"/"} exact component={Home} />
                <Route path={"/shop"} exact component={Shop} />
                <Route path={"/werehouse"} exact component={Werehouse} />
                <Route path={"/chosePlant"} exact component={ChosePlants} />
              </Switch>
            </BrowserRouter>
        </PlantState>
        </WerehouseState>
          </FieldState>
      </GlobalState>
    </div>
  );
}

export default App;
