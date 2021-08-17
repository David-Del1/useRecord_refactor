import { UNDO, REDO, CURRENT } from './actions';

export const initialState = {
  before: [],
  current:'#FF0000',
  after: []
};

export function reducer(state, action) {
  const { before, current, after } = state;
  
  switch(action.type) {
    
    case UNDO:
      return {
        ...state,
        before: (before).slice(0, -1),
        current: before[(before).length - 1],
        after: [current, ...after],
      };
    case REDO:
      return {
        ...state,
        before: [...before, current],
        current: after[0],
        after: after.slice(1),
      };
    case CURRENT:
      return {
        ...state,
        before: [...before, current],
        current: action.payload,
      };
    default:
      return state;
  }
}
