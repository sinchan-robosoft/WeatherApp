import * as Icons from "lucide-react-native";
import React from 'react';
import { ImageBackground, Text, View } from 'react-native';

const LiveRadar = () => {
    return (
        <View className=" mt-3 w-[90%]">
            <View className="bg-white rounded-3xl p-5 flex flex-col gap-2">

                <View className="flex-row justify-between items-start">
                    <View>
                        <Text className="text-xl font-bold">
                            Live Radar
                        </Text>

                        <Text className="text-slate-600 mt-1">
                            Brooklyn precipitation map
                        </Text>

                        <Text className="text-slate-600 mt-1">
                            +2 hr
                        </Text>
                    </View>

                    <View className="bg-[#7AD0C780] px-3 py-1 rounded-full">
                        <Text className="text-xs font-medium">
                            LIVE
                        </Text>
                    </View>
                </View>

                <View className="mt-4">
                    <ImageBackground
                        source={require("@/assets/images/LiveRadar/LiveRadarImage.png")}
                        className="w-full h-56 rounded-3xl overflow-hidden"
                        resizeMode="cover"
                        imageStyle={{ borderRadius: 24 }}
                    >
                        <View className="absolute top-3 left-3 bg-[#0A1D6D] px-3 py-2 rounded-2xl">
                            <Text className="text-white text-xs">LAYER</Text>
                            <Text className="text-white font-bold">Rainfall</Text>
                        </View>

                        <View className="absolute inset-0 justify-center items-center">
                            <View className="bg-[#1C2E6A] px-5 py-3 rounded-full">
                                <Text className="text-white text-lg">⊙</Text>
                            </View>
                        </View>

                        <View className="absolute right-3 top-4 gap-2">
                            <View className="h-10 w-10 bg-[#6AA9A3] rounded-full justify-center items-center">
                                <Text className="text-white text-lg">+</Text>
                            </View>

                            <View className="h-10 w-10 bg-[#6AA9A3] rounded-full justify-center items-center">
                                <Text className="text-white text-lg">−</Text>
                            </View>
                        </View>

                        <View className="absolute bottom-3 left-3 right-3 bg-black/30 rounded-2xl p-3">
                            <View className="flex-row justify-between items-center">
                                <View>
                                    <Text className="text-white font-bold">
                                        Forecast +2 hr
                                    </Text>

                                    <View className="flex-row gap-2 mt-2">
                                        <Text className="bg-white px-2 py-1 rounded-full text-xs">
                                            Brooklyn
                                        </Text>

                                        <Text className="bg-white px-2 py-1 rounded-full text-xs">
                                            Queens
                                        </Text>
                                    </View>
                                </View>

                                <View className="h-10 w-10 bg-[#3F7485] rounded-full justify-center items-center">
                                    <Text className="text-white">▶</Text>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </View>

                <View className='flex flex-row justify-between gap-2'>
                    {
                        [
                            { text: "rain", icon: "CloudRain" },
                            { text: "storm", icon: "CloudLightning" },
                            { text: "wind", icon: "Wind" }
                        ].map((item, index) => {
                            const Icon = Icons[item.icon]
                            return (
                                <View key={index} className='w-13 p-2 bg-rose-600 flex-1 flex-col rounded-3xl justify-center items-center'>
                                    <View>
                                        <Icon color="white" size={20} />
                                    </View>
                                    <View>
                                        <Text className="text-white">{item.text}</Text>
                                    </View>
                                </View>
                            )
                        })
                    }
                </View>
                <View className="flex flex-col gap-3 mt-3 bg-[#E5E7EB] p-6 rounded-3xl">
                    <View className="flex flex-row ">

                        {
                            <View className={`flex flex-row gap-2`}>
                                {
                                    [{ text: "Light", style: "bg-[#7AD0C7]" }, { text: "Moderate", style: "bg-[#061A6999]" }, { text: "Light", style: "bg-[#FF4D67B2]" }].map((item, index) => {
                                        return (
                                            <View key={index}>
                                                <View className={`${item.style} w-[50px] h-3 rounded-3xl `}>

                                                </View>
                                                <View className="flex items-center">
                                                    <Text className="text-xs">
                                                        {item.text}
                                                    </Text>
                                                </View>
                                            </View>
                                        )
                                    })
                                }
                            </View>
                        }


                    </View>
                    <View>
                        <Text className="text-slate-600 text-lg">
                            Rain bandreaches Brooklyn in 45 min.
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default LiveRadar;