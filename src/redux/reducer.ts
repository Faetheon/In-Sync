import { actionTypes as ActionTypes } from 'sharedFiles/constants';
import _ from 'lodash';
import { ReduxStore } from 'interfaces/redux';
import moment from 'moment';

export const defaultState: ReduxStore = {
  items: [],
  aboutNathan: {
    name: "Nathan",
    age: moment().diff('1999-03-04', 'years'),
    mission: "My mission is to keep progressing in my skills and knowledge. I learn something new every day whether its a new library or a new language. I find no mountain is too high and though I may fall I won't give up.",
    likes: ["How to train your dragon franchise", "Dungeon diving games", "Reading", "Finding simple yet effective solutions"],
    dream: "I want to create or discover new worlds and help others find them through virtual reality, games, or space exploration.",
    education: ["Highschool diploma", "Coding bootcamp"],
    aboutMe: "I love my family and am an avid reader. Always on the lookout for new litrpg books I enjoy the ideas that the authors have. I also enjoy gaming and the occasional theological disscussion."
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