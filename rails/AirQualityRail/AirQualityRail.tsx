import { LinearGradient } from "expo-linear-gradient";
import * as Icons from "lucide-react-native";
import React from "react";
import { Text, View, useWindowDimensions } from "react-native";

const AirQualityRail = () => {
  const { width ,height} = useWindowDimensions();

const isLandscape = width > height;
  const cardWidth = isLandscape ? (width - 100) /2 : (width - 32) / 2; 
  const iconSize = width * 0.06;
  const blobSize = width * 0.22;

  const data = [
    {
      sectionText: "Air Quality",
      value: "32",
      result: "Good",
      background: "bg-[#5EE9B5]",
      gradient: ["#5EE9B5", "#96F7E4", "#53EAFD","#ffffff","#ffffff"],
      icon: "Wind",
    },
    {
      sectionText: "UV Index",
      value: "7",
      result: "High",
      background: "bg-[#FEE685]",
      gradient: ["#FEE685", "#FFB86A", "#FFA1AD","#ffffff","#ffffff"],
      icon: "Sun",
    },
    {
      sectionText: "Wind",
      value: "14",
      result: "Km/h NE",
      background: "bg-[#A3B3FF]",
      gradient: ["#B8E6FE", "#8EC5FF", "#A3B3FF","#ffffff","#ffffff"],
      icon: "WindArrowDown",
    },
    {
      sectionText: "Humidity",
      value: "64%",
      result: "Balanced",
      background: "bg-[#F4A8FF]",
      gradient: ["#C6D2FF", "#C4B4FF", "#F4A8FF","#ffffff","#ffffff"],
      icon: "CloudRain",
    },
  ];

  return (
    <View className="px-3 mt-3 flex-row flex-wrap justify-between">
      {data.map((item, index) => {
        const Icon = Icons[item.icon as keyof typeof Icons];

        return (
          <View
            key={index}
            style={{
              width: cardWidth,
              marginBottom: 12,
            }}
            className="bg-white rounded-3xl relative overflow-hidden"
          >

            
            <LinearGradient
              colors={item.gradient as [string, string, string]}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={{
                position: "absolute",
                top: -blobSize * 0.25,
                right: -blobSize * 0.25,
                width: blobSize,
                height: blobSize,
                borderRadius: blobSize,
                opacity: 0.6,
              }}
            />

            {/* Icon */}
            <View className="p-4">
              <View
                className={`${item.background} self-start p-3`}
                style={{
                  borderRadius: 999,
                }}
              >
                <Icon size={iconSize} />
              </View>
            </View>

            {/* Content */}
            <View className="px-5 pb-5">
              <Text className="text-slate-500 text-sm">
                {item.sectionText}
              </Text>

              <Text
                style={{
                  fontSize: width * 0.08,
                }}
                className="font-bold"
              >
                {item.value}
              </Text>

              <Text className="text-slate-500 text-sm">
                {item.result}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default AirQualityRail;