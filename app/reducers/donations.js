const donations = (state = [], action = {}) => {
    switch (action.type) {
        case 'RESET_DONATIONS': // clear prior donations
        {
            const idList = [];
            const records = {};

            action.donations.forEach(record => {
                records[record.id] = record;
                idList.push(record.id);
            });

            return {idList, records};
        }
        case 'APPEND_DONATIONS':
        {
            const idList = state.idList;
            const records = state.records;

            action.donations.forEach(record => {
                const id = record.id;

                if (idList.indexOf(id) < 0) idList.push(id);
                records[id] = record;
            });

            return {idList, records};
        }
        default:
            return state;
    }
};

export default donations;