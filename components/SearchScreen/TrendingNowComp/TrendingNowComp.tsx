import HorizontalViewCard from '@/components/Utility/HorizontalViewCard/HorizontalViewCard'
import React from 'react'
import { Text, View } from 'react-native'

const TrendingNowComp = ({data} : {
    data : any[]
}) => {
  return (
    <View className='flex gap-1 flex-col p-6'>
        <Text className='text-lg text-slate-600'>
            Trending Now
        </Text>
        {
            data.map((item,index) => {
                return(
                    <HorizontalViewCard key={index} item={item} />
                )
            })
        }
    </View>
  )
}

export default TrendingNowComp
