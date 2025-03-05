import { RootNavigator } from '@navigation/RootNavigator';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from 'api/queryClient';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}

export default App;
