import { describe, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';

import Filter from './index';

describe('<Filter />', () => {
  test('Should render component Filter', () => {
    render(
      <Filter
        searchText={'searchText'}
        setSearchText={() => {
          return true;
        }}
      />,
    );
    const headerComponent = screen.getByTestId('component-filter');

    expect(headerComponent).toBeInTheDocument();
  });

  test('Should render title', () => {
    render(
      <Filter
        searchText={'searchText'}
        setSearchText={() => {
          return true;
        }}
      />,
    );
    const TitleText = screen.getByText(/Filtar dados sobre um país/i);
    expect(TitleText).toBeInTheDocument();
  });

  test('Should render input', () => {
    render(
      <Filter
        searchText={'searchText'}
        setSearchText={() => {
          return true;
        }}
      />,
    );
    const inputNode = screen.getByPlaceholderText('Digite o nome do País');
    expect(inputNode).toBeInTheDocument();
  });
});
