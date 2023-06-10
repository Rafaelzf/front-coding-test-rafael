import { describe, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';

import BoxDefault from './index';

describe('<BoxDefault />', () => {
  test('Should render component BoxDefault', () => {
    render(
      <BoxDefault>
        <div>"Childrem"</div>
      </BoxDefault>,
    );
    const DefaultComponent = screen.getByTestId('default-component');

    expect(DefaultComponent).toBeInTheDocument();
  });
});
