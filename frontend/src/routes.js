import React from "react";
import { Route, Switch } from "react-router-dom";

import LoginForm from "./containers/Login";
import RegisterForm from "./containers/Register";
import Booking from "./containers/Booking";
import Home from "./containers/Home";
import UserProfile from "./components/UserProfile";
import NotFoundPage from "./components/NotFoundPage";
import EditProfile from "./components/EditProfile";


const BaseRouter = () => (
    <div>
        <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/login/" component={ LoginForm } />
        <Route exact path="/register/" component={ RegisterForm } />
        <Route exact path="/booking/" component={ Booking } />
        <Route exact path="/users/:uname" component={ UserProfile } />
        <Route exact path="/users/:uname/edit" component={ EditProfile } />
        <Route exact path="/logout" component={ Home }/>
        <Route component={ NotFoundPage } />
        </Switch>
    </div>
);


export default BaseRouter;