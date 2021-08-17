export const selectBefore = state => state.before;
export const selectCurrent = state => {
  console.log(state);
  return state.current;
};
export const selectAfter = state => state.after;
