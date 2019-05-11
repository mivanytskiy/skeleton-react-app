import * as React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class HeaderComponent extends React.Component {
    public render() {
        return (
            <div className="header-component">
                <div className="header-component__item">
                    <Link to="/user">User</Link>
                </div>
                <div className="header-component__item">
                    <Link to="/admin">Admin</Link>
                </div>
            </div>
        );
    }
}

export const Header = HeaderComponent;
