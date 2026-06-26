import { LinearGradient } from "expo-linear-gradient";
import { WarehouseIcon } from "lucide-react-native";
import React from "react";
import { Pressable, Text, View } from "react-native";

const TrackRail = () => {
  return (
    <View className="px-3 mt-3">
      <View className="bg-white rounded-3xl border border-slate-300 p-5">
        <View className="flex-row items-start justify-between gap-4">
          
          <View className="flex-1">
            <View className="flex-row items-center gap-3 mb-3">
              <WarehouseIcon size={20} color="#FF4D67" />

              <Text className="text-rose-400 font-bold text-base">
                Storm Watch
              </Text>
            </View>

            <Text className="text-slate-600 text-sm leading-5">
              Thunder cells may arrive around 6 pm.
            </Text>

            <Text className="text-slate-600 text-sm leading-5">
              Alert buffer is already armed.
            </Text>
          </View>

          <View className="justify-center">
            <LinearGradient
              colors={[
                "rgba(122,208,199,0.3)",
                "rgba(196,27,70,0.3)",
              ]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{
                borderRadius: 999,
                padding: 2,
              }}
            >
              <Pressable className="bg-rose-900 px-5 py-3 rounded-full">
                <Text className="text-white font-semibold">
                  Track
                </Text>
              </Pressable>
            </LinearGradient>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TrackRail;