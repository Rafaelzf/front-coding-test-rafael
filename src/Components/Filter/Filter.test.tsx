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
});
