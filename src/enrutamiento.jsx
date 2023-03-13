import React from "react";
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
import { Bokunohero } from "./mangas/BokunoHero/bokunohero";
import { Bleach } from "./mangas/Bleach/bleach";
import { Shingeki } from "./mangas/Shingeki/shingeki";
import { Ippo } from "./mangas/Ippo/ippo";
import { Deathnote } from "./mangas/Deathnote/deathnote";
import { Profile } from './components/Profile/Profile';
import { DownloadPage } from './components/DownloadPage/DownloadPage';

export const Enrutamiento = () => {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/registro" component={Registro} />
        <Route path="/home" component={Home} />
        <Route path="/blackclover" component={Blackcover} />
        <Route path="/profile" component={Profile} />
        <Route path="/download" component={DownloadPage} />
        <Route path="/blackclovercap1" component={Cap1Blackclover} />
        <Route path="/naruto" component={Naruto} />
        <Route path="/dbz" component={Dbz} />
        <Route path="/bluelock" component={Bluelock} />
        <Route path="/onepiece" component={Onepiece} />
        <Route path="/bokunohero" component={Bokunohero} />
        <Route path="/bleach" component={Bleach} />
        <Route path="/shingekinokyojin" component={Shingeki} />
        <Route path="/hajimenoippo" component={Ippo} />
        <Route path="/deathnote" component={Deathnote} />
      </Switch>
    </BrowserRouter>
  );
};
