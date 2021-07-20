import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Navbar from "./componets/Navbar";
import { FieldState } from "./context/field/FieldState";
import { GlobalState } from "./context/global/GlobalState";
import ChosePlants from "./pages/ChosePlants";
import { PlantState } from "./context/plant/PlantState";
import Werehouse from "./pages/Werehouse";
import { WerehouseState } from "./context/werehouse/WerehouseState";
import cls from "./app.module.css";
import Register from "./pages/Register";
import {authContext} from './context/auth/authContext'
import {useAuth} from './hooks/auth.hook'

function App() {
  const { login, logout, token, userId } = useAuth();
  const isAuthenticated = !!token
  if (!isAuthenticated) {
    return (
      <div className={cls.container}>
        <authContext.Provider  value={{login, logout, token, userId}}>
          <BrowserRouter>
            <Switch>
              <Route path={"/"} exact component={Register} />
              <Redirect to={"/"} />
            </Switch>
          </BrowserRouter>
        </authContext.Provider>
      </div>
    );
  }
  return (
    <div className={cls.container}>
      <authContext.Provider value={{login, logout, token, userId}}>
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
                    <Redirect to={"/"} />
                  </Switch>
                </BrowserRouter>
              </PlantState>
            </WerehouseState>
          </FieldState>
        </GlobalState>
      </authContext.Provider>
    </div>
  );
}

export default App;
