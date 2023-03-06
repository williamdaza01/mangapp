import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./Home/Home";
import { Login } from "./login";
import { Registro } from "./registro";
import { Blackcover } from "./mangas/blackclover";
import { Items } from "./items";

export const Enrutamiento = () => {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route exact path="/" component={Registro} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/blackclover" component={Blackcover} />
      </Switch>
    </BrowserRouter>
  );
};
