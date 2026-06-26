
import React from 'react'
import { View } from 'react-native'

const Cards = (
    {
        cardType,
        cardData,
        cardHeight,
        cardWidth,
        CardComponent
    } : {
        cardType : string,
        cardData : any[],
        cardHeight : Number,
        cardWidth : Number,
        CardComponent : React.ComponentType<any>
    }
) => {
  return (
    <View className={`flex ${cardType === "horizontal" ? "flex-row" : "flex-col"} p-3 gap-2`}>
        {
            cardData.map((item,index) => {
                return(
                    <View  key={index}>
                        <CardComponent 
                          time={item.time}
                          imageUrl={item.imageUrl}
                          degree={item.degree}
                          rainPercent={item.rainPercent}
                        />
                    </View>
                )
            })
        }
    </View>
  )
}

export default Cards