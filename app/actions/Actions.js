import axios from 'axios';

import AppDispatcher from '../dispatcher/AppDispatcher';
import Consts from './Consts';

export class Actions {
    loadDetailedDonationData(params, domain = '') {
        const url = `${domain}/api/donation/${params.id}`;
        return axios.get(url);
    }

    getDetailedDonationData(params) {
        this.loadDetailedDonationData(params).then((response) => {
            AppDispatcher.dispatch({
                type: Consts.LOAD_DETAILED_DONATION,
                data: response.data
            });
        }).catch((err) => {
            throw new Error(err);
        });
    }

    loadLatestDonationsData(params, domain = '') {
        const url = `${domain}/api/latest-donations`;
        return axios.get(url);
    }

    getLatestDonationsData(params) {
        this.loadLatestDonationsData(params).then((response) => {
            AppDispatcher.dispatch({
                type: Consts.LOAD_LATEST_DONATIONS,
                data: response.data
            });
        }).catch((err) => {
            throw new Error(err);
        });
    }
}

export default new Actions();

