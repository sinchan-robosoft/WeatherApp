import React, { useEffect, useState } from 'react'
import { Pressable, ScrollView, Text, useWindowDimensions, View } from 'react-native'
import Card from "./CustomCard/HourlyAtmosphereCard"
import Description from "./DescriptionComp/Description"

const HourlyRail = ({setData,width,margin,overwrite} : {setData?: any,width?:String,margin?:String,overwrite?:String}) => {
    const cardData = [
  {
    time: "Now",
    degree: "24",
    rainPercent: "2",
    weatherStatus: "Partly Cloudy",
    desc: "A bright, calm morning. Run before clouds build at 2 PM.",
    icon: "CloudSun",
    iconColor: "#FBBF24", 
  },
  {
    time: "1 PM",
    degree: "27",
    rainPercent: "5",
    weatherStatus: "Sunny",
    desc: "Peak sunshine ahead. Stay hydrated if you're outdoors.",
    icon: "Sun",
    iconColor: "#F59E0B", 
  },
  {
    time: "2 PM",
    degree: "26",
    rainPercent: "20",
    weatherStatus: "Cloudy",
    desc: "Cloud cover increases, making for a cooler afternoon.",
    icon: "Cloud",
    iconColor: "#94A3B8", 
  },
  {
    time: "3 PM",
    degree: "23",
    rainPercent: "65",
    weatherStatus: "Light Rain",
    desc: "A passing shower is likely. Carry a light rain jacket.",
    icon: "CloudRain",
    iconColor: "#38BDF8", 
  },
  {
    time: "4 PM",
    degree: "22",
    rainPercent: "85",
    weatherStatus: "Thunderstorm",
    desc: "Storm cells may develop. Outdoor activities are not advised.",
    icon: "CloudLightning",
    iconColor: "#FACC15", 
  },
  {
    time: "5 PM",
    degree: "21",
    rainPercent: "30",
    weatherStatus: "Overcast",
    desc: "Rain eases off, but skies remain mostly gray.",
    icon: "Cloud",
    iconColor: "#64748B", 
  },
  {
    time: "6 PM",
    degree: "19",
    rainPercent: "10",
    weatherStatus: "Clear Evening",
    desc: "Comfortable temperatures return as the sun sets.",
    icon: "Moon",
    iconColor: "#C4B5FD", 
  },
];
    const [selectedIndex,setSelectedIndex] = useState(0)
    useEffect(() => {
        if(setData){
        setData({
            chanceOfRain : cardData[selectedIndex]?.rainPercent,
            weatherStatus : cardData[selectedIndex]?.weatherStatus,
            degree : cardData[selectedIndex]?.degree,
            description : cardData[selectedIndex]?.desc
        })
    }
    },[selectedIndex])
    const w = width ? width : "w-full"
    const m = margin ? margin : "mt-12"
    const isLandscape = useWindowDimensions().height < useWindowDimensions().width
  return (
    <View className={` bg-white rounded-3xl  pb-8 border border-slate-300  ${w} ${m} ${overwrite} ${isLandscape ? " w-[85%]" : ""}`}>
        <View className='flex flex-col'>
            <View className='flex gap-1 items-center flex-row justify-between p-12 '>
                <View>
                    <Text className='font-bold text-lg'>Hourly atmosphere</Text>
                </View>
                <View className='bg-gray-300 rounded-2xl p-2 shadow-black '>
                    <Text className='text-rose-600'>
                        10 days {">"}
                    </Text>
                </View>
            </View>
            <View className="bg-white ">
                <ScrollView nestedScrollEnabled horizontal={true} showsHorizontalScrollIndicator = {false} className='w-full bg-white'>
                  <View className={` flex-row p-3 gap-2  `}>
                          {
                              cardData.map((item,index) => {
                                  return(
                                      <Pressable className='' onPress={() => setSelectedIndex(index)} key={index}>
                                          <Card 
                                            isSelected = {selectedIndex == index}
                                            time={item.time}
                                            imageUrl={item.icon}
                                            degree={item.degree}
                                            rainPercent={item.rainPercent}
                                            iconColor = {item.iconColor}
                                          />
                                      </Pressable>
                                  )
                              })
                          }
                      </View>
                </ScrollView>

          {/* <FlatList
          horizontal
            data={cardData}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => <Card time={item.time}
                                            imageUrl={item.icon}
                                            degree={item.degree}
                                            rainPercent={item.rainPercent}
                                            iconColor = {item.iconColor} />}
          /> */}
            </View>
            <View className="mt-3 p-5 py-0  ">
                <Description />
            </View>
            
        </View>
    </View>
  )
}

export default HourlyRail