import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, View } from 'react-native';

const SavedClimateRail = () => {
  const data = [
    {
      location: "Tokyo",
      temp: "31°",
      subtitle: "Selected location",
      gradient: ["#D92E63", "#E86C86"],
    },
    {
      location: "Reykjavik",
      temp: "8°",
      subtitle: "North wind",
      gradient: ["#C8EFFF", "#BFD8F1"],
    },
    {
      location: "Lisbon",
      temp: "22°",
      subtitle: "Golden hour",
      gradient: ["#FCEBC3", "#F8DDE3"],
    },
  ];

  return (
    <View className="px-4 mt-4">
      <Text className="text-lg font-bold mb-4">
        Saved climates
      </Text>

      {data.map((item, index) => (
        <LinearGradient
          key={index}
          colors={item.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            borderRadius: 24,
            paddingVertical: 16,
            paddingHorizontal: 20,
            marginBottom: 10,
          }}
        >
          <View className="flex-row justify-between items-center">
            <View>
              <Text
                className={`font-semibold ${
                  index === 0 ? "text-white" : "text-slate-800"
                }`}
              >
                {item.location}
              </Text>

              <Text
                className={`text-xs mt-1 ${
                  index === 0 ? "text-white/80" : "text-slate-500"
                }`}
              >
                {item.subtitle}
              </Text>
            </View>

            <Text
              className={`text-3xl font-bold ${
                index === 0 ? "text-white" : "text-slate-900"
              }`}
            >
              {item.temp}
            </Text>
          </View>
        </LinearGradient>
      ))}
    </View>
  );
};

export default SavedClimateRail;