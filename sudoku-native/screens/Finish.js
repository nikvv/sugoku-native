import React, { useState, useEffect } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import tailwind from 'tailwind-rn';
import AsyncStorage from '@react-native-community/async-storage';


export default function Finish({ navigation, route }) {
      const { name, time } = route.params

      const [leaderboards, setLeaderboards] = useState([])
      let value = null

      const storeData = async (key, value) => {
            try {
                  await AsyncStorage.setItem(key, value)
            } catch (e) {
                  // saving error
                  console.log(e)
            }
      }

      const getMultiple = async () => {

            try {
                  let keys = await AsyncStorage.getAllKeys()
                  value = await AsyncStorage.multiGet(keys)
                  setLeaderboards(value)
            } catch (e) {
                  console.log(e)
            }
      }

      useEffect(() => {
            storeData(name, String(time))
      }, [])
      useEffect(() => {
            getMultiple()
      }, [])

      return (
            <View style={tailwind('p-4 items-center')}>
                  <View style={tailwind('h-32 mt-32 p-2 bg-gray-100 text-gray-900 border-l-2 rounded')}>
                        <Text style={tailwind('text-xl')}>Dear {name}....</Text>
                        <Text style={tailwind('text-lg mt-2')}>Congratulations on completing this sudoku by <Text style={tailwind('font-bold text-lg')}>{time}</Text> seconds ! We hope to see you again next time! ^^</Text>
                  </View>
                  <View style={tailwind('w-48 mt-4 bg-blue-200 rounded')}>
                        <Text style={tailwind('py-4 text-xl text-teal-900 text-center font-bold')} onPress={() => navigation.navigate('Start')}>Play Again!</Text>
                  </View>

                  <View style={tailwind('w-48 mt-4 bg-yellow-200 rounded')}>
                        <Text style={tailwind('py-4 text-xl text-yellow-900 text-center font-bold')} onPress={() => navigation.navigate('Leaderboard', leaderboards)}>Leaderboard</Text>
                  </View>
            </View>

      )
}

const styles = StyleSheet.create({
      messageBox: {
            padding: 10,
            margin: 10,
            marginTop: 200,
            backgroundColor: '#ffffff',
            borderWidth: 1,
            justifyContent: "center",
      },
      text: {
            fontFamily: 'Roboto',
            fontSize: 16
      }
});
