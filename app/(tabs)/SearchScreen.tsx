import { getSearchData } from "@/api/searchAPI/Searchapi";
import SavedCityComp from "@/components/SearchScreen/SavedCityComp/SavedCityComp";
import TrendingNowComp from "@/components/SearchScreen/TrendingNowComp/TrendingNowComp";
import HorizontalViewCard from "@/components/Utility/HorizontalViewCard/HorizontalViewCard";
import { addToRecentKeys, removeKeys } from "@/store/Slices/RecentKeys/RecentKeySlice";
import { useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react-native";
import { useState } from "react";
import {
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function TabTwoScreen() {

  const dispatcher = useDispatch();

  

  const [searchText, setText] = useState("");

  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  const { data, isLoading, refetch } = useQuery({
    queryKey: [searchText],
    queryFn: () => getSearchData(searchText),
    enabled: false,
  });

  const savedCities = useSelector((state) => state.SavedCitySlice);
  const recentKeys = useSelector((state) => state.RecentKeySlice)

  const removeAllKeys = () => {
    dispatcher(removeKeys())
  }

  const handlePress = () => {
    if(searchText.length > 2)
      dispatcher(addToRecentKeys(searchText))
    refetch()
  }
  
  const trendingNow = [
    {
      cityName: "Reykjavik",
      cityStatus: "Iceland - Overcast",
      cityTemp: "8",
      isLiked: false,
      index: 0,
      gradient: ["#A2F4FDB2", "#51A2FF80"],
    },
    {
      cityName: "New York",
      cityStatus: "USA - partly cloudy",
      cityTemp: "19",
      isLiked: false,
      index: 0,
      gradient: ["#BEDBFF99", "#74D4FF80"],
    },
    {
      cityName: "London",
      cityStatus: "UK - Cloudy",
      cityTemp: "14",
      isLiked: false,
      index: 0,
      gradient: ["#E5E7EBB2", "#CAD5E280"],
    },
    {
      cityName: "Paris",
      cityStatus: "France - sunny",
      cityTemp: "17",
      isLiked: false,
      index: 0,
      gradient: ["#FFCCD399", "#FFD6A880"],
    },
    {
      cityName: "Sydney",
      cityStatus: "Australia - Clear",
      cityTemp: "17",
      isLiked: false,
      index: 0,
      gradient: ["#B8E6FEB2", "#5EE9B580"],
    },
  ];

  return (
    <View className="flex-1">
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: isLandscape ? 60 : 120,
        }}
      >
        <View className="p-4">
          <Text className="text-slate-500">Locations</Text>

          <Text
            className={`font-bold ${
              isLandscape ? "text-2xl" : "text-4xl"
            }`}
          >
            Find Weather
          </Text>
        </View>

        <View className="px-6">
          <View className="flex-row items-center bg-white border border-gray-300 rounded-3xl px-4">
            <Pressable onPress={() => handlePress()}>
              <Search size={20} color="#6B7280" />
            </Pressable>
            

            <TextInput
              value={searchText}
              onChangeText={setText}
              onSubmitEditing={() => {
                handlePress()
              
              }}
              placeholder="City, Country, or Airport"
              className={`flex-1 px-3 ${
                isLandscape ? "py-2 text-sm" : "py-3 text-base"
              }`}
              placeholderTextColor="#9CA3AF"
              returnKeyType="search"
            />
          </View>
        </View>


        {recentKeys?.length > 0 ? <View>


          <View className="flex-row justify-between p-6">
            <Text className="text-slate-500">Recent</Text>

            <Pressable onPress={() => {
              removeAllKeys()
            }}>
              <Text className="text-slate-500">Clear all</Text>
            </Pressable>
          </View>

          <View className="flex-row flex-wrap gap-2 px-3">
            {recentKeys.map((item, index) => (
              <View
                key={index}
                className="bg-white p-3 border border-slate-200 rounded-3xl"
              >
                <Text>{item}</Text>
              </View>
            ))}
          </View>
        </View> : "" }
        {data && !isLoading && searchText ? (
          <View
            className={`mt-3 px-2 ${
              isLandscape
                ? "flex-row flex-wrap justify-between"
                : "flex-col"
            }`}
          >
            {data.map((item: any, index: number) => (
              <View
                key={index}
                className={isLandscape ? "w-[49%]" : "w-full"}
              >
                <HorizontalViewCard item={item} />
              </View>
            ))}
          </View>
        ) : (
          <>
            {savedCities && <View className="p-2">
              <SavedCityComp data={savedCities} />
            </View>}

            <View className="p-2">
              <TrendingNowComp data={trendingNow} />
            </View>
          </>
        )}
      </ScrollView>
    </View>
  );
}