import React from 'react';
import {Link} from 'react-router';

export default class CharityListItem extends React.Component {
    render() {
        const data = this.props.data;
        const link = this.calculateLink(data);

        return (
            <div className="charity charity-item">
                <img className="icon" src={data.icon}/>
                <div className="info-container">
                    <h4 className="title">{data.name}</h4>
                    <Link className="link" to={link}>
                        More Details &#187;
                    </Link>
                </div>
            </div>
        );
    }

    calculateLink(data) {
        return `/charity/${data.id}`;
    }
}
