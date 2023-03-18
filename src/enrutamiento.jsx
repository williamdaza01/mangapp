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
<<<<<<< HEAD
import { Profile } from "./components/Profile/Profile";
import { DownloadPage } from "./components/DownloadPage/DownloadPage";
import { Cap1Bleach } from "./mangas/Bleach/Capitulos/cap1bleach";
import { Cap2Bleach } from "./mangas/Bleach/Capitulos/cap2bleach";
import { Cap1Naruto } from "./mangas/Naruto/Capitulos/narutocap1";
import { Cap1Onepiece } from "./mangas/Onepiece/Capitulos/cap1onepiece";
import { Cap1Bluelock } from "./mangas/Bluelock/Capitulos/cap1bluelock";
import { Browser } from "./components/Browser/browser";
=======
import { Profile } from './components/Profile/Profile';
import { DownloadPage } from './components/DownloadPage/DownloadPage';

>>>>>>> f009605368269ee6e553bb079bf2dd3b3f034c22
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
        <Route path="/browser" component={Browser} />
        <Route path="/blackclovercap1" component={Cap1Blackclover} />
        <Route path="/naruto" component={Naruto} />
        <Route path="/narutocap1" component={Cap1Naruto} />
        <Route path="/dbz" component={Dbz} />
        <Route path="/bluelock" component={Bluelock} />
        <Route path="/bluelockcap1" component={Cap1Bluelock} />
        <Route path="/onepiece" component={Onepiece} />
        <Route path="/onepiececap1" component={Cap1Onepiece} />
        <Route path="/bokunohero" component={Bokunohero} />
        <Route path="/bleach" component={Bleach} />
        <Route path="/bleachcap1" component={Cap1Bleach} />
        <Route path="/bleachcap2" component={Cap2Bleach} />
        <Route path="/shingekinokyojin" component={Shingeki} />
        <Route path="/hajimenoippo" component={Ippo} />
        <Route path="/deathnote" component={Deathnote} />
      </Switch>
    </BrowserRouter>
  );
};
