import styled from 'styled-components';

import Nurses from '../../Assets/doctors.svg';
import { device } from '../../MainStyles/device';

export const Container = styled.div`
  width: 80%;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 45px;
  width: 100%;
  margin: 0 auto 0;

  @media ${device.tablet} {
    width: 70%;
    margin: -100px auto 0;
  }
`;

export const Presentation = styled.div`
  min-height: auto;
  margin-bottom: 40px;

  @media ${device.tablet} {
    min-height: 385px;
    margin-bottom: 0px;
    background: url(${Nurses}) right center no-repeat;
  }
`;

export const MainText = styled.div`
  width: 100%;
  text-align: center;

  h1 {
    font-size: 38px;
    margin-bottom: 20px;
  }

  @media ${device.tablet} {
    width: 50%;
    text-align: left;
  }
`;

export const ErrorText = styled.p`
  text-align: center;
  font-size: 20px;
  color: red;
`;
