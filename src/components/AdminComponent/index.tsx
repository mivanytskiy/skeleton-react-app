import * as React from 'react';

class Admin extends React.Component {
    public render() {
        return (
            <div className="admin-component">
                Admin
                <div className="admin-component__header">
                    Header
                </div>
                <div className="admin-component__content">
                    Content
                </div>
            </div>
        );
    }
}

export const AdminComponent = Admin;
