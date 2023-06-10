import { describe, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';

import Nation from './index';

describe('<Nation />', () => {
  test('Should render component Nation', () => {
    const ctr = {
      cases: null,
      confirmed: 10000,
      country: 'Brazil',
      deaths: 10000,
      recovered: null,
      updated_at: '2020-03-18T23:00:00.000Z',
    };
    render(<Nation {...ctr} />);
    const headerComponent = screen.getByTestId('component-nation');

    expect(headerComponent).toBeInTheDocument();
  });
});
