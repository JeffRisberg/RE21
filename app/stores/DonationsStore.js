import BaseStore from './BaseStore';
import Consts from '../actions/Consts';

let donationsData = {};

export default class DonationStore extends BaseStore {
    resetAll() {
        donationsData = {};
    }

    setAll(data) {
        donationsData = data;
    }

    getAll() {
        return donationsData;
    }

    handleAction(action) {
        switch (action.type) {
        case Consts.LOAD_DONATIONS:
            this.setAll(action.data);
            this.emitChange();
            break;
        default:
        }
    }
}
