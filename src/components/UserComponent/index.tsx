import * as React from 'react';

class User extends React.Component {
    public render() {
        return (
            <div className="user-component">
                User
                <div className="user-component__header">
                    Header
                </div>
                <div className="user-component__content">
                    Content
                </div>
            </div>
        );
    }
}

export const UserComponent = User;
