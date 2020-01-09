import ACTIONS from './action';
import _ from 'lodash';
import { ReduxStore } from '../ts-interfaces/interfaces';

export const defaultState: ReduxStore = {
  items: [],
  aboutNathan: {
    name: "Nathan",
    age: new Date().getFullYear() - new Date(1999, 3).getFullYear(),
    skills: [
      {
        name: "JavaScript",
        workExp: new Date().getFullYear() - new Date(2018, 6).getFullYear(),
      }
    ]
  }
};

const todoReducer = (state = defaultState, action: any) => {
  switch (action.type) {

    case ACTIONS.Types.CREATE_ITEM: {

      let item = action.payload;
      let newItem = { id: state.items.length + 1, description: item };
      let newState = _.cloneDeep(state);
      newState.items.push(newItem);
      return newState;
    }

    case ACTIONS.Types.DELETE_ITEM: {
      let newState = _.cloneDeep(state);
      let index = _.findIndex(newState.items, { id: action.payload });
      newState.items.splice(index, 1);
      return newState;
    }

    default:
      return state;
  }
}

export default todoReducer;