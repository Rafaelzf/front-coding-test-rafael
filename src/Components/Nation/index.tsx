import { ReactElement } from 'react';

import { CountrieData } from '../../Pages/Home/App';
import BoxDefault from '../BoxDefault';
import { CountriesData, Title } from './styles';

const Nation = (ctr: CountrieData): ReactElement => {
  const { confirmed, country, deaths, updated_at } = ctr;

  const date = new Date(updated_at);
  const formatedDate = new Intl.DateTimeFormat('pt-BR').format(date);

  return (
    <BoxDefault>
      <>
        <Title>{country}</Title>

        <CountriesData>
          <li>
            <h3>Total de casos</h3>
            <strong>{confirmed}</strong>
          </li>
          <li>
            <h3>Mortes</h3>
            <strong>{deaths}</strong>
          </li>
          <li>
            <h3>Última atualização</h3>
            <strong>{formatedDate}</strong>
          </li>
        </CountriesData>
      </>
    </BoxDefault>
  );
};

export default Nation;
