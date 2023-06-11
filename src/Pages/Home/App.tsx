import axios from 'axios';
import { type ReactElement, useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import Loading from '../../Assets/loading.gif';
import { BoxDefault, Filter, Nation, PageDefault } from '../../Components';
import { baseURL } from '../../Conections';
import {
  Container,
  ErrorText,
  Main,
  MainText,
  Presentation,
  ContainerBoxes,
} from './styles';

export interface CountrieData {
  cases: null | number;
  confirmed: number;
  country: string;
  deaths: number;
  recovered: null | number;
  updated_at: string;
}

const App = (): ReactElement => {
  const [countries, setContries] = useState<CountrieData[]>([]);
  const [searchText, setSearchText] = useState<string>('');
  const { isLoading, data, error } = useQuery('data', () =>
    axios.get(`${baseURL}countries`),
  );

  const search = (searchText: string) => {
    if (!data?.data.data) return;
    const newData: CountrieData[] = data?.data.data;
    const value = String(searchText).toLowerCase();
    const countriesFiltered = newData.filter((country) =>
      country.country.toLowerCase().includes(value),
    );
    setContries(countriesFiltered);
  };

  useEffect(() => {
    if (data?.data.data) {
      setContries(data?.data.data);
    }
  }, [data?.data.data]);

  useEffect(() => {
    if (!searchText) return;
    search(searchText);
  }, [searchText]);

  return (
    <PageDefault>
      <Container>
        <Presentation>
          <MainText>
            <h1>Conheça o Covidrômetro</h1>
            <p>
              Fique atualizado com velocidade e transparência. O Covidrômetro é uma
              ferramenta que mostra para você em tempo real o número de casos de óbitos
              relacionados à pandemia do COVID-19 ao redor do mundo.
            </p>
          </MainText>
        </Presentation>
        <Main>
          {isLoading && (
            <BoxDefault>
              <img src={Loading} alt="Loading" title="Loading" />
            </BoxDefault>
          )}
          {!isLoading && error ? (
            <BoxDefault>
              <ErrorText>
                💢 Infelizmente houve algum erro inexperado. Volte mais tarde. ⛔️
              </ErrorText>
            </BoxDefault>
          ) : (
            <ContainerBoxes data-testid="container-filter">
              <Filter searchText={searchText} setSearchText={setSearchText} />
              {countries &&
                countries.map((country) => <Nation {...country} key={country.country} />)}
            </ContainerBoxes>
          )}
        </Main>
      </Container>
    </PageDefault>
  );
};

export default App;
