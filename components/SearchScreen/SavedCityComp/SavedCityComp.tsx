import HorizontalViewCard from '@/components/Utility/HorizontalViewCard/HorizontalViewCard'
import React from 'react'
import { Text, View } from 'react-native'

const SavedCityComp = ({data} : {
    data : any[]
}) => {
  return (
    <View className='flex gap-0 flex-col p-6'>
        <Text className='text-lg text-slate-600'>
            Saved Cities
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

export default SavedCityComp