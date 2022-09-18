import { React, useState } from "react";
import Topbar from "../../Assests/Topbar/Topbar";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../../Authentication/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer.js";
import { componentList } from "./data";


function App() {
  const [user, setUser] = useState(null);
  const componentListRefine = componentList.slice(0,13);
  if (user !== null) {
    return (
      <>
        <Topbar />
        <Header />
        <Switch>
          {componentListRefine.map((value, id) => {
            return (
              <Route
                key={id}
                exact
                path={value.link}
                component={value.component}
              />
            );
          })}
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        {/* <Switch> */}
          {/* <Route exact path="/login" render={(props) => <Login setUser={setUser} />} /> */}
          <Login setUser={setUser} />
        {/* </Switch> */}
      </>
    );
  }
}

export default App;
