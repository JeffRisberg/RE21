import React from 'react';

import NavLink from '../common/NavLink';

export default class Header extends React.Component {
    static get contextTypes() {
        return {
            root: React.PropTypes.string
        };
    }

    render() {
        return (
            <header>
                <NavLink to="/">RE21</NavLink>

                <ul>
                    <li><NavLink to="/charities">Charities</NavLink></li>
                    <li><NavLink to="/donations">Donations</NavLink></li>
                </ul>
            </header>
        );
    }
}
