import CustomTabBar from "@/components/CustomTabBar/CustomTabBar";
import Header from "@/components/HomePageComponents/Header";
import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabLayout() {
  return (
    <SafeAreaView className="flex-1">
       <Header />
      <Tabs 
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tabs.Screen name="HomeScreen" />
      <Tabs.Screen name="SearchScreen" />
      <Tabs.Screen name="WeatherScreen" />
      <Tabs.Screen name="SavedGridScreen" />
      {/* <Tabs.Screen name="GeminiScreen" /> */}
    </Tabs>
    </SafeAreaView>
    
  );
}