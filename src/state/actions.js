export const UNDO = 'UNDO';
export const REDO = 'REDO';
export const CURRENT = 'CURRENT';

export const setUndo = () => ({
  type: UNDO,
});

export const setRedo = () => ({
  type: REDO,
});

export const setCurrent = (current) => ({
  type: CURRENT,
  payload: current,
});
