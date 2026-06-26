import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import {
  Home,
  Map,
  Search,
  Umbrella
} from "lucide-react-native";
import { Pressable, useWindowDimensions, View } from "react-native";

const icons = [Home, Search, Umbrella, Map]; //, Sparkles


export default function CustomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {

const { width, height } = useWindowDimensions();
const isLandscape = width > height;
  return (
    <View className="absolute bottom-8 left-5 right-5">
      <View
        className={`${isLandscape ? "h-12" : "h-20"} lg:h-8 md:h-8 bg-white rounded-full flex-row items-center justify-around`}
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
                <View style={{borderRadius : "30%"}} className=" p-3 bg-rose-600 items-center justify-center ">
                  <Icon size={isLandscape ? 18 : 22} color="white" />
                </View>
              ) : (
                <View className="p-3">
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