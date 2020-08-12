import React, { useState, useEffect } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import tailwind from 'tailwind-rn';
import AsyncStorage from '@react-native-community/async-storage';


export default function Finish({ navigation, route }) {
      let leaderboards = route.params
      let rankStyle = 'text-sm'
      leaderboards = leaderboards.sort((x, y) => +x[1] - +y[1]);
      return (

            <View style={tailwind('p-4 items-center')}>
                  <View>
                        <Text style={tailwind('text-xl font-bold underline')}>Leaderboard</Text>
                  </View>
                  {
                        leaderboards.map((user, idx) => {
                              if (idx < 3) {
                                    rankStyle = 'text-lg text-yellow-900'
                              }
                              else {
                                    rankStyle = ''
                              }
                              if (idx < 8) return <View key={idx} style={[tailwind('w-64 p-2 mt-2 bg-gray-100 text-gray-900 border-l-2 rounded'), { elevation: 7 }]}>
                                    <Text style={tailwind('mt-2')}><Text style={tailwind(`${rankStyle} font-bold`)}>#{idx + 1}</Text> {user[0]}: <Text style={tailwind('font-bold')}>{user[1]} </Text>seconds</Text>
                              </View>
                        })
                  }

                  <View style={tailwind('w-48 mt-4 bg-blue-200 rounded')}>
                        <Text style={tailwind('py-4 text-xl text-teal-900 text-center font-bold')} onPress={() => navigation.navigate('Start')}>Play Again!</Text>
                  </View>
            </View>

      )
}
