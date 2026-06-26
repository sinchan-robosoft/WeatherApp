import * as Icons from "lucide-react-native"
import React from 'react'
import { Text, View } from 'react-native'

const HourlyAtmosphereCard = ({time,imageUrl,degree,rainPercent,isSelected,size,iconColor} : {
  time? : string,
  imageUrl?: string,
  degree?: string,
  rainPercent?:string,
  isSelected? : boolean,
  size? : number,
  iconColor?: string
}) => {
  const textColor = isSelected ? "text-slate-300" : "text-black"
  let key = imageUrl ? imageUrl : "Sun";
  const Icon = Icons[key]
  return (
    <View className={`flex gap-1 flex-col justify-center items-center ${isSelected ? "bg-[#C41B46]" : "bg-white"}  rounded-3xl p-6 shadow-black shadow-2xl border border-slate-300`}>
        <View className=''>
          <Text className={textColor}>
            {time}
          </Text>
        </View>
        <View>
          <Icon size = {size} color={iconColor}/>
          {/* <Image className='h-8 w-10 object-contain' source={require("@/assets/images/HeroRail/sunForCard.png")} /> */}
          {/* source={{
            uri : "@/assets/images/HeroRail/sunForCard.png"
          }} */}
        </View>
        <View>
          <Text className={textColor}>
            {degree + "\u00B0"}
          </Text>
        </View>
        <View>
          <Text className={textColor}>
            {rainPercent}%
          </Text>
        </View>
    </View>
  )
}

export default HourlyAtmosphereCard