import { actionTypes as ActionTypes } from 'sharedFiles/constants';
import _ from 'lodash';
import { ReduxStore } from 'interfaces/redux';
import moment from 'moment';

export const defaultState: ReduxStore = {
  items: [],
  aboutNathan: {
    name: "Nathan",
    age: moment().diff('1999-03-04', 'years'),
  }
};

const rootReducer = (state = defaultState, action: any) => {
  switch (action.type) {

    case ActionTypes.CREATE_ITEM: {
      let item = action.payload;
      let newItem = { id: state.items.length + 1, description: item };
      let newState = _.cloneDeep(state);
      newState.items.push(newItem);
      return newState;
    }

    case ActionTypes.DELETE_ITEM: {
      let newState = _.cloneDeep(state);
      let index = _.findIndex(newState.items, { id: action.payload });
      newState.items.splice(index, 1);
      return newState;
    }

    default:
      return state;
  }
}

export default rootReducer;