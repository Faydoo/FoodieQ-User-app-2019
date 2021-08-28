import { FETCH_VENDORS } from '../actions/vendors';

const initialState = {
    vendors: []
};

const vendorsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_VENDORS:
            return {
                vendors: action.vendors
            };
        default:
            return state;
    }
}

export default vendorsReducer;