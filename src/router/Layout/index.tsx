import * as React from 'react';
import {
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';
import {
    UserContainer,
    AdminContainer,
} from '../../containers';

class Router extends React.Component {
    public render() {
        return (
            <Switch>
                <Route exact={true} path="/admin" component={AdminContainer}/>
                <Route exact={true} path="/user" component={UserContainer}/>
                <Route path="**" render={() => <Redirect to="/user"/>}/>
            </Switch>
        );
    }
}

export const AppRouter = Router;
