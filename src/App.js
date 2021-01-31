import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { useSelector } from "react-redux";
import SearchPokemon from './services/searchPokemon';
import SetTheme from "./services/setTheme";
import Catalog from './templates/Catalog'

export default function App() {
  // const theme = useSelector((state) => state.theme);

  SetTheme("grass");
  SearchPokemon();

  return (
    <BrowserRouter>
      <Switch>
        <Route exact  path="/grass" component={Catalog}>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
