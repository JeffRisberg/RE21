import React from 'react';
import {Link} from 'react-router';

export default class CompactDonation extends React.Component {
    render() {
        const data = this.props.data;
        const amount = `$${data.amount}`;
        const link = this.calculateLink(data);

        return (
            <div className="donation compact-donation">
                <img className="icon" src={data.icon}/>
                <div className="info-container">
                    <h4 className="title">{data.charity}</h4>
                    <span className="period">{data.period}</span>
                    <Link className="link" to={link}>
                        More Details &#187;
                    </Link>
                </div>
                <span className="amount">{amount}</span>
            </div>
        );
    }

    calculateLink(data) {
        return `/donations/${data.id}`;
    }
}
