import React from 'react';

import {Link} from 'react-router';

import Actions from '../../actions/Actions';

export default class DetailedDonation extends React.Component {
    static loadAction(params, domain) {
        return Actions.loadDetailedDonationData(params, domain);
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
        Actions.getDetailedDonationData(this.props.params);
    }

    onChange() {
        const state = this.props.store.getAll();
        this.setState(state);
    }

    render() {
        console.log(this.state);
        const amount = `$${this.state.amount}`;

        return (
            <section className="latest-donations">
                <header className="section-header">
                    <h3 className="title">Donation Details</h3>
                    <Link className="link" to={this.context.root}>&#171; Home</Link>
                </header>
                <section className="section-content">
                    <div className="donation detailed-donation">
                        <img className="icon" src={this.state.icon}/>
                        <div className="info-container">
                            <h4 className="title">{this.state.vendor}</h4>
                            <span className="period">{this.state.period}</span>
                            <hr/>
                            <span>
                                <span className="period">Paid using: </span> 
                                <span>{this.state.paymeans}</span>
                            </span>
                        </div>
                        <span className="amount">{amount}</span>
                    </div>
                </section>
            </section>
        );
    }
}
