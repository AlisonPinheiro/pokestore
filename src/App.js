import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MiniCart } from './components/MiniCart';
import { PurchaseNotice } from './components/PurchaseNotice';
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
      <PurchaseNotice />
      <MiniCart />
      <Switch>
        <Route exact  path="/grass" component={Catalog}>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
