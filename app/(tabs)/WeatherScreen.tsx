import CardItem from '@/components/WeatherScreen/CardItem';
import HourlyRail from '@/rails/HourlyRail/HourlyRail';
import { ScrollView, Text, View } from 'react-native';


export default function WeatherScreen() {
  const cardData = [
    {
      day : "Today",
      desc : "Mostly bright",
      imageUrl : "",
      text : "29 \u00B0 / 18 \u00B0",
      icon : "Sun",
      iconColor : "#FE9A00"
    },
    {
      day : "Tue",
      desc : "Mostly bright",
      imageUrl : "",
      text : "28 \u00B0 / 17 \u00B0",
      icon : "Sun",
      iconColor : "#FE9A00"
    },
    {
      day : "Wed",
      desc : "Showers late",
      imageUrl : "",
      text : "27 \u00B0 / 16 \u00B0",
      icon : "Sun",
      iconColor : "#FE9A00"
    },
    {
      day : "Thu",
      desc : "Mostly bright",
      imageUrl : "",
      text : "26 \u00B0 / 15 \u00B0",
      icon : "Sun",
      iconColor : "#FE9A00"
    },
    {
      day : "Fri",
      desc : "Mostly bright",
      imageUrl : "",
      text : "25 \u00B0 / 14 \u00B0",
      icon : "Sun",
      iconColor : "#FE9A00"
    }
  ]
  return (
    <View className="flex-1 flex flex-col  h-screen w-screen">
      <ScrollView className='flex-1'
        contentContainerStyle={{
          paddingHorizontal: 12,
          paddingBottom : 120
        }}
      >
        <View className='w-full p-3 flex flex-col'>
            <View className='p-3 flex gap-2'>
              <Text className='text-slate-600'>
                PLANNING
              </Text>
              <Text className='text-3xl font-bold'>
                10-day outlook
              </Text>
            </View>
            <View >
              <HourlyRail />
            </View>
            
        </View>
        <View className='flex flex-col'>
          {
            cardData.map((item,index) => {
              return(
                <View className='p-1 px-3' key={index}>
                    <CardItem iconColor = {item.iconColor} day={item.day} degree={item.text} weather={item.desc} icon={item.icon}/>
                </View>
              )
            })
          }
        </View>
        </ScrollView>
    </View>
  );
}
