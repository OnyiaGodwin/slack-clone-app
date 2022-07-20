import { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chatbar/Chat";
import Login from "./components/Auth/Login";
import { useStateValue } from "./store/StateProvider";

import "./App.css";

function App() {
  const [{ user }] = useStateValue();

  return (
    <Fragment>
      {!user ? (
        <Login />
      ) : (
        <Router>
          <div className="app">
            {/**Header */}
            <Header />

            <div className="app__body">
              {/**Sidebar */}
              <Sidebar />

              <Switch>
                {/**React-Router --> Chat screen */}
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <h1>Welcome!</h1>
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      )}
    </Fragment>
  );
}

export default App;
