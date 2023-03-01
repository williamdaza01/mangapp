
import { BrowserRouter, Link,Switch,Route,  } from "react-router-dom";
import { Home } from "./Home/Home";
import { Login } from "./login";
import { Registro } from "./registro";

export const Enrutamiento = () => {
  const inlineSyles = {
    padding: 5,
  };

  return (
    <BrowserRouter basename="/">
      
        <Link to="/login" style={inlineSyles}>
          Login
        </Link>

        <Link to="/">Registro</Link>

        <Link to="/home">Home</Link>

      <Switch>
      <Route exact path="/" component={Registro} />
        <Route path="/home" component={Home} />

        <Route path="/login" component={Login} />
        </Switch>

        
      
      
    </BrowserRouter>
  );
};