import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import HourlyRail from '../HourlyRail/HourlyRail';

const { width } = Dimensions.get('window');

const HeroRail = () => {

  const cloudImage = require('@/assets/images/HeroRail/mainCloud.png')
  const sunImage = require('@/assets/images/HeroRail/sunImage.png')

  const tempSize = width * 0.22;
  const sunSize = width * 0.45;
  const [weatherData,setData] = useState({
    chanceOfRain : "",
    weatherStatus : "",
    degree : "",
    description : ""
  })
  return (
    <View className="w-full px-3">

   
    <View className="rounded-3xl shadow-black " >
      <LinearGradient className="flex flex-col"
        colors={[
          'rgba(122,208,199,0.3)',
          'rgba(196,27,70,0.3)',
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          borderRadius: 24,
          paddingTop : 24
          //paddingVertical: 24,
        }}
      >
        <View className="px-6">
          <View
            style={{
              backgroundColor: 'white',
            }}
            className="self-start px-4 py-2 rounded-full"
          >
            <Text className="text-slate-500 font-medium text-xs">
              {//8% chance of rain
                weatherData.chanceOfRain + "% chance of rain."
              }
            </Text>
          </View>
        </View>

        <View className="flex-row justify-between items-center px-6 mt-4">
          <View className="flex-1">
            <Text className="text-slate-700 text-base font-semibold tracking-wider">
              {//PARTLY SUNNY
                weatherData.weatherStatus
              }
            </Text>

            <Text
              style={{
                fontSize: tempSize,
                lineHeight: tempSize,
              }}
              className="text-black font-bold"
            >
              {//24°
                weatherData.degree+"°"
              }
            </Text>
          </View>

          <View
            style={{
              width: sunSize,
              height: sunSize,
            }}
            className="justify-center items-center"
          >
            <Image
              source={Number(weatherData.chanceOfRain) < 24 ? sunImage : cloudImage}
              style={{
                width: sunSize,
                height: sunSize,
              }}
              resizeMode="contain"
            />
          </View>
        </View>

        <View className="px-6 mt-2 ">
          <Text className="text-black text-lg leading-5">
            {//A bright, calm morning. Run before clouds build at 2 PM.
              weatherData.description
            }
          </Text>
        </View>
        <HourlyRail setData = {setData} />
        
      </LinearGradient>
      
    </View>
     </View>
  );
};

export default HeroRail;