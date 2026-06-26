import HorizontalViewCard from '@/components/Utility/HorizontalViewCard/HorizontalViewCard'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

const TrendingNowComp = ({data} : {
    data : any[]
}) => {
    useEffect(()=> {
        console.log(data)
    },[data])
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
