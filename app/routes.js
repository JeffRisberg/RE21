import React from 'react';
import {IndexRoute, Route} from 'react-router';

import App from './components/app';
import NoMatch from './components/common/NoMatch';

import Dashboard from './components/dashboard/Dashboard';
import Donations from './components/donation/Donations';
import DetailedDonation from './components/donation/DetailedDonation';

import DonationsStore from './stores/DonationsStore';

import ComponentConnectorFactory from './components/common/ComponentConnectorFactory';

const DetailedDonationConnector = ComponentConnectorFactory.connect({
    name: 'DetailedDonationConnector',
    component: DetailedDonation,
    store: DonationsStore
});

const DonationsConnector = ComponentConnectorFactory.connect({
    name: 'DonationsConnector',
    component: Donations,
    store: DonationsStore
});

export default (
    <Route path="/" component={App}>
        <Route component={Dashboard}>
            <IndexRoute component={DonationsConnector}/>
            <Route path="donation/:id" component={DetailedDonationConnector}/>
        </Route>
        <Route path="*" component={NoMatch}/>
    </Route>
);
