import * as React from 'react';
import { UserComponent } from '../../components';

class User extends React.Component {
    public render() {
        return (
            <UserComponent />
        );
    }
}

export const UserContainer = User;
