import React from 'react'
import { ScrollView, View } from 'react-native'
import HourlyRail from '../HourlyRail/HourlyRail'
import LiveRadar from './LiveRadar/LiveRadar'

const EnhancedRadarRail = () => {
  return (
    <ScrollView
      className='flex-1'
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 0 }}
    >
      <View className='flex items-center w-[300px] md:w-1/2'>
        <LiveRadar />
      </View>

      <View className='w-[300px] md:w-1/2 mr-4 flex items-center'>
        <HourlyRail width={"w-full  h-full"} margin={"mt-2"} overwrite={"mx-0"} />
      </View>
    </ScrollView>
  )
}

export default EnhancedRadarRail 