import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import HomePage from "../components/HomePage";
import PortfolioItemPage from "../components/PortfolioItemPage";
import ContactPage from "../components/ContactPage";
import Header from "../components/Header";
import NotFoundPage from "../components/NotFoundPage";
import PortfolioPage from "../components/PortfolioPage";

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={HomePage} exact={true}/>
                <Route path="/portfolio" component={PortfolioPage} exact={true}/>
                <Route path="/portfolio/:id" component={PortfolioItemPage}/>
                <Route path="/contact" component={ContactPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;