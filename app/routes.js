import React from 'react';
import {IndexRoute, Route} from 'react-router';

import App from './components/app';
import NoMatch from './components/common/NoMatch';

import Dashboard from './components/dashboard/Dashboard';

import Donations from './components/donation/Donations';
import DetailedDonation from './components/donation/DetailedDonation';

import CharityList from './components/charity/List';
import CharityShow from './components/charity/Show';

import DonationsStore from './stores/DonationsStore';
import CharitiesStore from './stores/CharitiesStore';

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

const CharityListConnector = ComponentConnectorFactory.connect({
    name: 'CharitiesConnector',
    component: CharityList,
    store: CharitiesStore
});

const CharityShowConnector = ComponentConnectorFactory.connect({
    name: 'CharityShowConnector',
    component: CharityShow,
    store: CharitiesStore
});

export default (
    <Route path="/" component={App}>
        <Route component={Dashboard}>
            <IndexRoute component={DonationsConnector}/>
            <Route path="donation/:id" component={DetailedDonationConnector}/>
            <Route path="charities" component={CharityListConnector}/>
            <Route path="charity/:id" component={CharityShowConnector}/>
        </Route>
        <Route path="*" component={NoMatch}/>
    </Route>
);
