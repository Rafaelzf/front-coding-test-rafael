import { describe, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';

import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
describe('<App />', () => {
  test('Should render component PageDefault', () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>,
    );
    const headerComponentText = screen.getByText(/Conheça o Covidrômetro/i);
    const ParagraphText = screen.getByText(
      /Fique atualizado com velocidade e transparência. O Covidrômetro é uma ferramenta que mostra para você em tempo real o número de casos de óbitos relacionados à pandemia do COVID-19 ao redor do mundo./i,
    );

    expect(headerComponentText).toBeInTheDocument();
    expect(ParagraphText).toBeInTheDocument();
  });
});
