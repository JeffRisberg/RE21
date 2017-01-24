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

    loadDonationsData(params, domain = '') {
        const url = `${domain}/api/donations`;
        return axios.get(url);
    }

    getDonationsData(params) {
        this.loadDonationsData(params).then((response) => {
            AppDispatcher.dispatch({
                type: Consts.LOAD_DONATIONS,
                data: response.data
            });
        }).catch((err) => {
            throw new Error(err);
        });
    }

    loadDetailedCharityData(params, domain = '') {
        const url = `${domain}/api/charity/${params.id}`;
        return axios.get(url);
    }

    getDetailedCharityData(params) {
        this.loadDetailedCharityData(params).then((response) => {
            AppDispatcher.dispatch({
                type: Consts.LOAD_DETAILED_CHARITY,
                data: response.data
            });
        }).catch((err) => {
            throw new Error(err);
        });
    }

    loadCharitiesData(params, domain = '') {
        const url = `${domain}/api/charities`;
        return axios.get(url);
    }

    getCharitiesData(params) {
        this.loadCharitiesData(params).then((response) => {
            AppDispatcher.dispatch({
                type: Consts.LOAD_CHARITIES,
                data: response.data
            });
        }).catch((err) => {
            throw new Error(err);
        });
    }
}

export default new Actions();

