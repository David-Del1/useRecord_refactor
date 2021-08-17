import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { ReduxProvider } from '../../state/ReduxProvider';
import { initialState, reducer } from '../../state/reducer';

describe('App component', () => {

  it('renders App', () => {
    const { asFragment } = render(
      <ReduxProvider reducer={reducer} initialState={initialState}>
        <App />
      </ReduxProvider>
    );
    
    const display = screen.getByTestId('display');

    const input = screen.getByTestId('input');
    fireEvent.change(input, { target: { value: '#ff0000' } });
    expect(display).toHaveStyle({ backgroundColor: '#ff0000' });

    //userEvent.click
    const undoBtn = screen.getByTestId('undoBtn');
    userEvent.click(undoBtn);
    expect(display).toHaveStyle({ backgroundColor: '#ff0000' })
    ;
    const redoBtn = screen.getByTestId('redoBtn');
    fireEvent.change(input, { target: { value: '#003cff' } });
    fireEvent.change(input, { target: { value: '#73eb11' } });
    userEvent.click(undoBtn);
    userEvent.click(redoBtn);
    expect(display).toHaveStyle({ backgroundColor: '#73eb11' });


  });
});
