import { WeatherList } from '@components/WeatherList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen, waitFor } from '@testing-library/react-native';
import { ReactNode } from 'react';

function renderWithClient(ui: ReactNode) {
  const testQueryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return render(
    <QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>
  );
}

describe('WeatherList component test', () => {
  it('WeatherList renders correctly', async () => {
    renderWithClient(<WeatherList />);
    await waitFor(() =>
      expect(screen.getByTestId('WeatherList_Id')).toBeTruthy()
    );
  });
  it('WeatherList renders rows', async () => {
    renderWithClient(<WeatherList />);
    await waitFor(() => {
      const listItems = screen.getAllByTestId('WeatherHeader_Id');
      expect(listItems).toBeTruthy();
      expect(listItems.length).toBe(10);
    });
  });
});
