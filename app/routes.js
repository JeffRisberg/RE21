import React from 'react';
import {IndexRoute, Route} from 'react-router';

import App from './components/app';
import NoMatch from './components/common/NoMatch';

import Dashboard from './components/dashboard/Dashboard';
import LatestBills from './components/bill/LatestBills';
import DetailedBill from './components/bill/DetailedBill';

import DetailedBillStore from './stores/DetailedBillStore';
import LatestBillsStore from './stores/LatestBillsStore';

import ComponentConnectorFactory from './components/common/ComponentConnectorFactory';

const DetailedBillConnector = ComponentConnectorFactory.connect({
    name: 'DetailedBillConnector',
    component: DetailedBill,
    store: DetailedBillStore
});

const LatestBillsConnector = ComponentConnectorFactory.connect({
    name: 'LatestBillsConnector',
    component: LatestBills,
    store: LatestBillsStore
});

export default (
    <Route path="/" component={App}>
        <Route component={Dashboard}>
            <IndexRoute component={LatestBillsConnector}/>
            <Route path="bill/:id" component={DetailedBillConnector}/>
        </Route>
        <Route path="*" component={NoMatch}/>
    </Route>
);
