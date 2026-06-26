import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import {
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native'

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [location] = useState('Brooklyn')

  const { width, height } = useWindowDimensions()

  const isLandscape = width > height

  const iconSize = isLandscape ? 24 : 28
  const buttonSize = isLandscape ? 52 : 50

  return (
    <View className="px-4 py-4">
      <View className="flex-row items-center justify-between gap-2">

        <TouchableOpacity
          style={{ width: buttonSize, height: buttonSize }}
          className="bg-white rounded-xl items-center justify-center border border-gray-200"
        >
          <Ionicons name="menu" size={iconSize} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-1 bg-white rounded-full justify-center items-center border border-gray-200 px-3"
          style={{ height: buttonSize }}
        >
          <View className="flex-row gap-2 items-center">
            <Ionicons
              name="send"
              size={isLandscape ? 12 : 14}
              color="black"
            />

            <Text
              numberOfLines={1}
              className={`font-bold ${isLandscape ? 'text-sm' : 'text-sm'}`}
            >
              {location}
            </Text>
          </View>

          {!isLandscape && (
            <Text className="text-xs text-gray-600">
              Tap to change
            </Text>
          )}
        </TouchableOpacity>

        <View className="flex-row gap-2">
          <TouchableOpacity
            style={{ width: buttonSize, height: buttonSize }}
            className="bg-white rounded-xl justify-center items-center border border-gray-200"
            onPress={() => setIsDarkMode(!isDarkMode)}
          >
            <Ionicons
              name={isDarkMode ? 'moon' : 'moon-outline'}
              size={iconSize}
              color={isDarkMode ? '#A855F7' : 'black'}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{ width: buttonSize, height: buttonSize }}
            className="bg-white rounded-xl justify-center items-center border border-gray-200"
          >
            <Ionicons
              name="notifications-outline"
              size={iconSize}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Header