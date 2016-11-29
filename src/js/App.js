/**
 * Created by Lukin on 27.09.2016.
 */
import React from "react";
import {Router, hashHistory} from "react-router";
import * as Routes from "./Routes";

export default class App extends React.Component {
    render() {
        const routes = Routes.getAppRoutes();
        return (<Router routes={routes} history={hashHistory}/>);
    }
}
