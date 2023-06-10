import { ReactElement } from 'react';

import { Container } from './styles';

type BoxDefaultProps = {
  children: ReactElement;
};

const BoxDefault = ({ children }: BoxDefaultProps): ReactElement => {
  return (
    <Container>
      <div data-testid="default-component">{children}</div>
    </Container>
  );
};

export default BoxDefault;
