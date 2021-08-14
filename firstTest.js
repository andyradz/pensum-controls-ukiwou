import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Counter from './counter';

export default function FirstTest() {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('potrafi wyrenderować i aktualizować licznik', () => {
    // Testuje pierwsze renderowanie i metodę cyklu życia "componentDidMount"
    act(() => {
      ReactDOM.render(<Counter />, container);
    });
    const button = container.querySelector('button');
    const label = container.querySelector('p');
    expect(label.textContent).toBe('Kliknięto 0 razy');
    expect(document.title).toBe('Kliknięto 0 razy');

    // Testuje drugie renderowanie i metodę cyklu życia "componentDidUpdate"
    act(() => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(label.textContent).toBe('Kliknięto 1 razy');
    expect(document.title).toBe('Kliknięto 1 razy');
  });
}
