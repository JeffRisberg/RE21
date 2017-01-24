import React from 'react';
import {IndexRoute, Route} from 'react-router';

import App from './components/app';
import NoMatch from './components/common/NoMatch';

import Dashboard from './components/dashboard/Dashboard';
import LatestDonations from './components/donation/LatestDonations';
import DetailedDonation from './components/donation/DetailedDonation';

import DetailedDonationStore from './stores/DetailedDonationStore';
import LatestDonationsStore from './stores/LatestDonationsStore';

import ComponentConnectorFactory from './components/common/ComponentConnectorFactory';

const DetailedDonationConnector = ComponentConnectorFactory.connect({
    name: 'DetailedDonationConnector',
    component: DetailedDonation,
    store: DetailedDonationStore
});

const LatestDonationsConnector = ComponentConnectorFactory.connect({
    name: 'LatestDonationsConnector',
    component: LatestDonations,
    store: LatestDonationsStore
});

export default (
    <Route path="/" component={App}>
        <Route component={Dashboard}>
            <IndexRoute component={LatestDonationsConnector}/>
            <Route path="donation/:id" component={DetailedDonationConnector}/>
        </Route>
        <Route path="*" component={NoMatch}/>
    </Route>
);
