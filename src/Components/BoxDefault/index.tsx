import { ReactElement } from 'react';

import { Container } from './styles';

type BoxDefaultProps = {
  children: ReactElement;
};

const BoxDefault = ({ children }: BoxDefaultProps): ReactElement => {
  return <Container>{children}</Container>;
};

export default BoxDefault;
