import { ReactElement } from 'react';

import BoxDefault from '../BoxDefault';
import { InputBox, Title } from './styles';

export type FilterProps = {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
};

const Filter = (props: FilterProps): ReactElement => {
  const { searchText, setSearchText } = props;
  return (
    <BoxDefault>
      <div data-testid="component-filter">
        <Title>Filtar dados sobre um país</Title>

        <InputBox>
          <input
            type="text"
            name="filter"
            placeholder="Digite o nome do País"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </InputBox>
      </div>
    </BoxDefault>
  );
};

export default Filter;
