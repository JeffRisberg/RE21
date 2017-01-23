import BaseStore from './BaseStore';
import Consts from '../actions/Consts';

let detailedDonationData = {};

export default class DetailedDonationStore extends BaseStore {
    resetAll() {
        detailedDonationData = {};
    }

    setAll(data) {
        detailedDonationData = data;
    }

    getAll() {
        return detailedDonationData;
    }

    handleAction(action) {
        switch (action.type) {
        case Consts.LOAD_DETAILED_Donation:
            this.setAll(action.data);
            this.emitChange();
            break;
        default:
        }
    }
}
