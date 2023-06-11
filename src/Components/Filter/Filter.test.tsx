import { describe, test } from '@jest/globals';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import Filter from './index';

beforeEach(() => {
  const fn = jest.fn();
  render(<Filter searchText={'searchText'} setSearchText={fn} />);
});

describe('<Filter />', () => {
  test('Should render component Filter', () => {
    const headerComponent = screen.getByTestId('component-filter');

    expect(headerComponent).toBeInTheDocument();
  });

  test('Should render title', () => {
    const TitleText = screen.getByText(/Filtar dados sobre um país/i);
    expect(TitleText).toBeInTheDocument();
  });

  test('Should render input', () => {
    const inputNode = screen.getByPlaceholderText('Digite o nome do País');
    expect(inputNode).toBeInTheDocument();
  });

  test('Should call setSearchText function on each key pressed', () => {
    const inputNode = screen.getByPlaceholderText('Digite o nome do País');
    const value = 'Brazil';
    fireEvent.change(inputNode, { target: { value: value } });

    waitFor(() => {
      expect(inputNode.nodeValue).toBe(value);
    });
  });
});
