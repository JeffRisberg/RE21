import React from 'react';

import {Link} from 'react-router';

import Actions from '../../actions/Actions';

export default class CharityShow extends React.Component {
    static loadAction(params, domain) {
        return Actions.loadDetailedCharityData(params, domain);
    }

    static get contextTypes() {
        return {
            root: React.PropTypes.string            
        };
    }

    constructor(props) {
        super(props);
        this.changeHandler = this.onChange.bind(this);
        this.state = this.props.store.getAll() || {};
    }

    componentWillMount() {
        if (process.browser) {
            this.props.store.addChangeListener(this.changeHandler);            
        }
    }

    componentWillUnmount() {
        this.props.store.removeChangeListener(this.changeHandler);
    }

    componentDidMount() {
        Actions.getDetailedCharityData(this.props.params);
    }

    onChange() {
        const state = this.props.store.getAll();
        this.setState(state);
    }

    render() {
        return (
            <section className="charities">
                <header className="section-header">
                    <h3 className="title">Charity Details</h3>
                    <Link className="link" to={this.context.root}>&#171; Home</Link>
                </header>
                <section className="section-content">
                    <div className="charity show">
                        <div className="info-container">
                            <h4 className="title">{this.state.name}</h4>
                            <span className="description">{this.state.description}</span>
                        </div>
                    </div>
                </section>
            </section>
        );
    }
}
