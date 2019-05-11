import { History } from 'history';
import * as React from 'react';
import { Router } from 'react-router';
import { AppRouter } from './router';
import { Header } from './components';

interface AppProps {
    history: History;
}

class App extends React.Component<AppProps> {
    public render() {
        const { history } = this.props;
        return (
            <Router history={history}>
                <React.Fragment>
                    <Header />
                    <AppRouter />
                </React.Fragment>
            </Router>
        );
    }
}

export default App;
