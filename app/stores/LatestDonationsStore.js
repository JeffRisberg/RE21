import BaseStore from './BaseStore';
import Consts from '../actions/Consts';

let latestDonationsData = {};

export default class LatestDonationStore extends BaseStore {
    resetAll() {
        latestDonationsData = {};
    }

    setAll(data) {
        latestDonationsData = data;
    }

    getAll() {
        return latestDonationsData;
    }

    handleAction(action) {
        switch (action.type) {
        case Consts.LOAD_LATEST_DONATIONS:
            this.setAll(action.data);
            this.emitChange();
            break;
        default:
        }
    }
}
