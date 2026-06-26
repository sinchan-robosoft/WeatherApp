import LiveRadar from '@/rails/EnhancedRadarRail/LiveRadar/LiveRadar';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';

import { useWindowDimensions } from 'react-native';




const SavedGrid = () => {
  const {height,width} = useWindowDimensions();
  
  const isLandscape = width > height;
  const bottomPadding = isLandscape ? 500 : 150;
  return (
    <ScrollView
  className="flex"
  contentContainerStyle={{
    paddingBottom: bottomPadding,
    alignItems: isLandscape ? undefined : "center",
    justifyContent: "center",
  }}
>
        <View className="flex-1 flex flex-col gap-2  h-screen w-screen">
      <View className='flex jus flex-col p-6'>
        <Text className='text-slate-500'>Map Layers</Text>
        <Text className='text-4xl font-bold'>Live Radar</Text>
      </View>
      <View className='flex flex-col items-start '>
          <LiveRadar />
      </View>     
      <View className={`flex flex-row p-6 gap-2 ${isLandscape ? "w-[85%]" : "w-full"}`}>
        {
          [{
            key : "Storm ETA",
            value : "42 Min"
          },
          {
            key : "Confidence",
            value : "88%"
          }
        ].map((item,index) => (
            <View key={index} className='flex w-1/2 p-6 flex-col bg-white rounded-3xl'>
              <Text className='text-slate-500 text-sm'>
                {item.key}
              </Text>
              <Text className='text-2xl font-bold'>
                {item.value}
              </Text>
            </View>  
          ))
        }
        
      </View>   
    </View>
    </ScrollView>
    
  )
}

export default SavedGrid