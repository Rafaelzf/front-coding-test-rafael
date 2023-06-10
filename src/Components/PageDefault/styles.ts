import styled from 'styled-components';

import { device } from '../../MainStyles/device';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  padding: 15px 124px;
  background-color: var(--pure-white);
  box-shadow: 0px 9px 7px -1px rgba(222, 205, 222, 1);
  margin-bottom: 25px;

  @media ${device.tablet} {
    margin-bottom: 75px;
    justify-content: left;
  }
`;

export const MainContent = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px 0 101px 0;
`;
