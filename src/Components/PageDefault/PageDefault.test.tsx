import { describe, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';

import PageDefault from './index';

describe('<Header />', () => {
  test('Should render component PageDefault', () => {
    render(
      <PageDefault>
        <div>Childrem</div>
      </PageDefault>,
    );
    const headerComponent = screen.getByTestId('component-page-default');

    expect(headerComponent).toBeInTheDocument();
  });
});
