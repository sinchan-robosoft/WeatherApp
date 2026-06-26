import { insertCity, removeCity } from '@/store/Slices/SavedCitySlice/SavedCitySlice'
import { LinearGradient } from 'expo-linear-gradient'
import { Heart } from "lucide-react-native"
import React, { useEffect, useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'

const HorizontalViewCard = ({item}) => {

  const dispatcher = useDispatch()
  const [liked,setLiked] = useState(false)
  useEffect(() => {
    setLiked(item.isLiked)
  },[item.isLiked])

  const handleOnPress = () => {
    if (liked)
      dispatcher(removeCity(item.cityName))
    else{
      const temp = {...item,isLiked : true}
      dispatcher(insertCity(temp))
    }
    setLiked(!liked)
  }

  return (
    <LinearGradient
              key={item.index}
              colors={item.gradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{
                borderRadius: 24,
                paddingVertical: 16,
                paddingHorizontal: 20,
                marginBottom: 10,
              }}
            >
              <View className="flex-row justify-between items-center">
                <View>
                  <Text
                    className={`font-semibold ${
                      "text-black"
                    }`}
                  >
                    {item.cityName}
                  </Text>
    
                  <Text
                    className={`text-xs mt-1 ${
                      "text-slate-500"
                    }`}
                  >
                    {item.cityStatus}
                  </Text>
                </View>
    
              <View className='flex flex-row items-center justify-center gap-2'>
                  <Text
                      className={`text-3xl font-bold  text-black
                          }`}
                  >
                    {item.cityTemp + "\u00B0"}
                    
                  </Text>
                  <Pressable onPress={() => {
                    handleOnPress()
                    
                  }}>
                        <View style={{borderRadius : "100%"}} className='bg-[#C41B4626] rounded-full p-2'>
                    { liked ? <Heart color="red"
                          fill="red"  size={15} className='text-rose-400' /> : <Heart color="black"
                           size={15} className='text-rose-400' /> }
                  </View>
                  </Pressable>
                  
              </View>
                
              </View>
            </LinearGradient>
  )
}

export default HorizontalViewCard