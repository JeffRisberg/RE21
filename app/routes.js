import React from 'react';
import {IndexRoute, Route} from 'react-router';

import App from './components/app';
// import Home from './components/main/Home';
import NoMatch from './components/common/NoMatch';

import DonationsStore from './stores/DonationsStore';
import CharitiesStore from './stores/CharitiesStore';

import Donations from './components/donation/Donations';
import DetailedDonation from './components/donation/DetailedDonation';

import CharityList from './components/charity/List';
import CharityShow from './components/charity/Show';

import ComponentConnectorFactory from './components/common/ComponentConnectorFactory';

const DonationsConnector = ComponentConnectorFactory.connect({
    name: 'DonationsConnector',
    component: Donations,
    store: DonationsStore
});

const DetailedDonationConnector = ComponentConnectorFactory.connect({
    name: 'DetailedDonationConnector',
    component: DetailedDonation,
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
        <IndexRoute component={DonationsConnector}/>
        <Route path="donations">
            <Route path=":id" component={DetailedDonationConnector}/>
            <IndexRoute component={DonationsConnector}/>
        </Route>
        <Route path="charities">
            <Route path=":id" component={CharityShowConnector}/>
            <IndexRoute component={CharityListConnector}/>
        </Route>
        <Route path="*" component={NoMatch}/>
    </Route>
);
