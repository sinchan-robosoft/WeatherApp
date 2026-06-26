import * as Icons from 'lucide-react-native';
import React from 'react';
import { Text, View } from 'react-native';


const CardItem = (
  {
    day,
    weather,
    degree,
    icon,
    iconColor
  }
) => {
  const ElemIcon = Icons[icon];
  return (
    
    <View className='shadow-black shadow-lg border border-slate-300 flex flex-row w-full p-6 px-12 justify-between bg-white rounded-full items-center'>
        <View>
          <ElemIcon size={30} color={iconColor} />
        </View>
        <View className='flex flex-col'>
            <Text>
              {day}
            </Text>
            <Text className='text-slate-600'>
              {weather}
            </Text>
        </View>
        <View>
          <Text className='font-bold text-lg'>
            {degree}
          </Text>
        </View>
    </View>
  )
}

export default CardItem