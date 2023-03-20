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
import { Profile } from "./components/Profile/Profile";
import { DownloadPage } from "./components/DownloadPage/DownloadPage";
import { Cap1Bleach } from "./mangas/Bleach/Capitulos/cap1bleach";
import { Cap2Bleach } from "./mangas/Bleach/Capitulos/cap2bleach";
import { Cap1Naruto } from "./mangas/Naruto/Capitulos/narutocap1";
import { Cap1Onepiece } from "./mangas/Onepiece/Capitulos/cap1onepiece";
import { Cap1Bluelock } from "./mangas/Bluelock/Capitulos/cap1bluelock";
import { Browser } from "./components/Browser/browser";
import { Busqueda } from "./components/Busqueda/Busqueda";
import { Gogoloseranger } from "./mangas/GoGoLoserRangers/gogoloserrangers";
import { Hunterxhunter } from "./mangas/HunterxHunter/hunterxhunter";
import { Cap1Ippo } from "./mangas/Ippo/Capitulos/cap1ippo";
import { Cap1Dbz } from "./mangas/Dbz/Capitulos/cap1sbz";
import { Cap1BokunoHero } from "./mangas/BokunoHero/Capitulos/cap1bokunohero";
import { Cap1HunterxHunter } from "./mangas/HunterxHunter/Capitulos/cap1hunterxhunter";
import { Cap1Shingeki } from "./mangas/Shingeki/Capitulos/cap1shingeki";

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
        <Route path="/dbzcap1" component={Cap1Dbz} />
        <Route path="/bluelock" component={Bluelock} />
        <Route path="/bluelockcap1" component={Cap1Bluelock} />
        <Route path="/onepiece" component={Onepiece} />
        <Route path="/onepiececap1" component={Cap1Onepiece} />
        <Route path="/bokunohero" component={Bokunohero} />
        <Route path="/bokunoherocap1" component={Cap1BokunoHero} />
        <Route path="/bleach" component={Bleach} />
        <Route path="/bleachcap1" component={Cap1Bleach} />
        <Route path="/bleachcap2" component={Cap2Bleach} />
        <Route path="/shingekinokyojin" component={Shingeki} />
        <Route path="/shingekinokyojincap1" component={Cap1Shingeki} />
        <Route path="/hajimenoippo" component={Ippo} />
        <Route path="/hajimenoippocap1" component={Cap1Ippo} />
        <Route path="/deathnote" component={Deathnote} />
        <Route path="/busqueda" component={Busqueda} />
        <Route path="/gogoloserranger" component={Gogoloseranger} />
        <Route path="/hunterxhunter" component={Hunterxhunter} />
        <Route path="/hunterxhuntercap1" component={Cap1HunterxHunter} />
      </Switch>
    </BrowserRouter>
  );
};
