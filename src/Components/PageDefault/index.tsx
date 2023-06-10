import { ReactElement } from 'react';

import Logo from '../../Assets/logo.png';
import { Header, MainContent } from './styles';

type PageDefaultProps = {
  children: ReactElement;
};

const PageDefault = ({ children }: PageDefaultProps): ReactElement => {
  return (
    <section data-testid="component-page-default">
      <Header>
        <img src={Logo} alt="Covidômetro logo" />
      </Header>
      <MainContent>{children}</MainContent>
    </section>
  );
};

export default PageDefault;
