import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, NavLink, Route, Switch} from 'react-router-dom';

import 'normalize.css/normalize.css'
import './styles/styles.scss'

const ExpenseDashboardPage = () => (
    <div>
        This is from my dashboard component.
    </div>
);

const AddExpensePage = () => (
    <div>
        This is from my add expense component
    </div>
);

const EditExpensePage = () => (
    <div>
        This is from my edit expense component
    </div>
);

const HelpPage = () => (
    <div>
        This is from my help component
    </div>
);

const NotFoundPage = () => (
    <div>
        404 - <Link to="/">Go home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <ul>
            <li><NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink></li>
            <li><NavLink to="/create" activeClassName="is-active">Create Expense</NavLink></li>
            <li><NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink></li>
            <li><NavLink to="/help" activeClassName="is-active">Help</NavLink></li>
        </ul>
    </header>
);

const routes = (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage}/>
                <Route path="/edit" component={EditExpensePage}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
