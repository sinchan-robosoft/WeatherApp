import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Home, Map, Search, Umbrella } from "lucide-react-native";
import { Pressable, useWindowDimensions, View } from "react-native";

const icons = [Home, Search, Umbrella, Map];

export default function CustomTabBar({
  state,
  navigation,
}: BottomTabBarProps) {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  return (
    <View
      className={`absolute  ${
        isLandscape ? "left-[25%] right-[25%] w-1/2 bottom-2" : "left-8 right-8 bottom-6"
      }`}
    >
      <View
        className={`${
          isLandscape ? "h-14" : "h-16"
        } bg-white rounded-full flex-row items-center justify-around`}
        style={{
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 6 },
          shadowOpacity: 0.12,
          shadowRadius: 12,
          elevation: 8,
        }}
      >
        {state.routes.map((route, index) => {
          const focused = state.index === index;
          const Icon = icons[index];

          return (
            <Pressable
              key={route.key}
              onPress={() => navigation.navigate(route.name)}
              className="items-center justify-center"
            >
              {focused ? (
                <View className="bg-rose-600 rounded-full p-3 items-center justify-center">
                  <Icon size={isLandscape ? 18 : 22} color="white" />
                </View>
              ) : (
                <View className="p-2 items-center justify-center">
                  <Icon size={isLandscape ? 18 : 22} color="#6B7280" />
                </View>
              )}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}