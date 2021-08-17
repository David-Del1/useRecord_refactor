import React from 'react';
import { setCurrent, setRedo, setUndo } from '../../state/actions';
import { useDispatch, useSelector } from '../../state/ReduxProvider';
import { selectCurrent } from '../../state/selectors';



function App() {
  const current = useSelector(selectCurrent);
  const dispatch = useDispatch();

  const undo = () => {
    dispatch(setUndo());
  };

  const redo = () => {
    dispatch(setRedo());
  };

  const record = (current) => {
    dispatch(setCurrent(current));
  };

  return (
    <>
      <button data-testid="undoBtn" onClick={undo}>undo</button>
      <button data-testid="redoBtn" onClick={redo}>redo</button>
      <input
        type="color"
        value={current}
        onChange={({ target }) => record(target.value)}
        data-testid="input"
      />
      <div
        style={{ backgroundColor: current, width: '10rem', height: '10rem' }}
        data-testid="display"
      ></div>
    </>
  );
}

export default App;
