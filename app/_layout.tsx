import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
//import 'react-native-reanimated';
import { store } from "@/store/store";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from "react-redux";
import "../global.css";

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  let colorScheme = useColorScheme();
  const client = new QueryClient()
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DefaultTheme : DarkTheme }>
      
     <QueryClientProvider client={client}>
      <Provider store = {store}>
    
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          {/* <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} /> */}
        </Stack>
        <StatusBar style="dark" />
         </Provider>
       </QueryClientProvider>
       
    </ThemeProvider>
  );
}
