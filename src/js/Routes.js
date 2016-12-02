import React from "react";
import ExpenseList from "./components/ExpenseList";

export const getAppRoutes = () => {
    const appRoutes = {
        path: '/',
        component: ()=> {return <ExpenseList />}
    };
    return appRoutes;
};
