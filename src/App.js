import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import "./styles/main.css";
import "./styles/bootstrap.min.css";
import Home from "./pages/home";
import Category from "./pages/category";
import Login from "./pages/login";
import Profile from "./pages/profile";
import { Provider, connect } from "unistore/react";
import { store } from "./components/store";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/login" component={Login} />
                    <Route path="/:kat" component={Category} />
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
