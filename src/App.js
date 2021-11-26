import "./App.css";
//import About from "./components/About";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    //  console.log(asdf);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode is enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
    }
  };

  return (
    <>
      {/*<Router>*/}
      <Navbar title="BigFoot" mode={mode} toggle={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/*/user
		  /user/about
		  will render same i.e /user if exact path is not used*/}
        {/*<Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm
                showAlert={showAlert}
                heading="Enter the Text"
                mode={mode}
              />
            </Route>
          </Switch>*/}
        <TextForm showAlert={showAlert} heading="Enter the Text" mode={mode} />
      </div>
      {/*</Router>*/}
    </>
  );
}

export default App;
