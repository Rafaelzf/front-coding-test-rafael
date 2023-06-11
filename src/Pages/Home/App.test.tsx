import { describe, test } from '@jest/globals';
import {
  render,
  screen,
  waitForElementToBeRemoved,
  waitFor,
} from '@testing-library/react';

import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';

beforeEach(() => {
  const queryClient = new QueryClient();
  render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>,
  );
});

describe('<App />', () => {
  test('Should render component PageDefault', () => {
    const headerComponentText = screen.getByText(/Conheça o Covidrômetro/i);
    const ParagraphText = screen.getByText(
      /Fique atualizado com velocidade e transparência. O Covidrômetro é uma ferramenta que mostra para você em tempo real o número de casos de óbitos relacionados à pandemia do COVID-19 ao redor do mundo./i,
    );

    expect(headerComponentText).toBeInTheDocument();
    expect(ParagraphText).toBeInTheDocument();
  });

  test('Should not show img when not loading', async () => {
    const imgLoading = screen.getByRole('img', { name: /Loading/i });
    await waitForElementToBeRemoved(imgLoading);
  });

  test('Should show Filter when data clonclude', async () => {
    waitFor(() => expect(screen.getByTestId('container-filter')).toBeInTheDocument());
  });
});
