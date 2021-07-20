import { CHANGE_FILTER } from '../actions';

const initialstate = () => {
  'All';
};

const filterreducer = (state= initialstate,action) => {

    switch (action.type) {
        case: CHANGE_FILTER
        return [...state]
        default:
            return state;
    }
};
export default filterreducer;
