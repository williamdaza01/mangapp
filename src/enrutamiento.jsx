import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./Home/Home";
import { Login } from "./login";
import { Registro } from "./registro";
import { Cap1Blackclover } from "./mangas/BlackClover/Capitulos/cap1blackclover";
import { Blackcover } from "./mangas/BlackClover/blackclover";
import { Naruto } from "./mangas/Naruto/naruto";
import { Dbz } from "./mangas/Dbz/dbz";
import { Bluelock } from "./mangas/Bluelock/bluelock";
import { Onepiece } from "./mangas/Onepiece/onepiece";
export const Enrutamiento = () => {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route exact path="/" component={Registro} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/blackclover" component={Blackcover} />
        <Route path="/blackclovercap1" component={Cap1Blackclover} />
        <Route path="/naruto" component={Naruto} />
        <Route path="/dbz" component={Dbz} />
        <Route path="/bluelock" component={Bluelock} />
        <Route path="/onepiece" component={Onepiece} />
      </Switch>
    </BrowserRouter>
  );
};
