import BaseStore from './BaseStore';
import Consts from '../actions/Consts';

let charitiesData = {};

export default class CharitiesStore extends BaseStore {
    resetAll() {
        charitiesData = {};
    }

    setAll(data) {
        charitiesData = data;
    }

    getAll() {
        return charitiesData;
    }

    handleAction(action) {
        switch (action.type) {
            case Consts.LOAD_CHARITIES:
                this.setAll(action.data);
                this.emitChange();
                break;
            case Consts.LOAD_DETAILED_CHARITY:
                this.setAll(action.data);
                this.emitChange();
                break;
            default:
        }
    }
}
