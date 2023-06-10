import styled from 'styled-components';

import { device } from '../../MainStyles/device';

export const Title = styled.h2`
  text-align: center;
  margin: 0;
`;

export const CountriesData = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 40px;
  margin: 0;

  h3 {
    font-size: 13px;
    margin-bottom: 5px;
  }

  li {
    list-style: none;
    text-align: center;
  }

  strong {
    color: var(--secundary-font);
  }

  @media ${device.tablet} {
    flex-direction: row;
  }
`;
