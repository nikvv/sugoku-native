import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { StyleSheet, Button, Text, View, TextInput, KeyboardAvoidingView } from 'react-native';
import { setStatusAction } from '../store/actions';
import tailwind from 'tailwind-rn';




export default function Start({ navigation }) {

      dispatch = useDispatch()
      const difficulties = ['easy', 'medium', 'hard', 'random']
      const [name, setName] = useState('')
      const [notification, setNotification] = useState(false)

      function startGame(difficulty) {
            if (name === '') {
                  setNotification(true)
                  setTimeout(() => {
                        setNotification(false)
                  }, 3000);
            }
            else {
                  dispatch(setStatusAction(''))
                  navigation.navigate({
                        name: 'Game',
                        params: {
                              difficulty,
                              name
                        }
                  })
                  setName('')
            }
      }



      return (
            <View style={tailwind('py-10 px-10')}>
                  {
                        notification && <View style={tailwind('px-2 py-2 bg-red-200 border border-red-900 rounded ')}>
                              <Text style={tailwind('text-red-900')}><Text style={tailwind('text-lg font-bold')}>ERROR!</Text> name cannot empty! </Text>
                        </View>
                  }
                  <View>
                        <Text style={tailwind('mt-4 text-2xl font-bold')}>LET'S <Text style={tailwind('text-green-600')}>SU</Text><Text style={tailwind('text-yellow-600')}>GO</Text><Text style={tailwind('text-red-600')}>KU</Text> !</Text>
                  </View>
                  <View style={tailwind('mt-10')}>
                        <Text style={tailwind('text-gray-900 text-sm')}>Your name here:</Text>
                        <TextInput maxLength={12} style={[tailwind('w-64  px-2 py-1 mt-2 border border-gray-500 bg-gray-100'), { elevation: 20 }]} value={name} placeholder="Your Name"
                              onChangeText={text => setName(text)}>

                        </TextInput>
                  </View>

                  <View style={tailwind('mt-5')}>
                        {
                              difficulties.map((difficulty, idx) => {
                                    const style = difficulty === 'easy' ? 'green' : difficulty === 'medium' ? 'yellow' : difficulty === 'hard' ? 'red' : 'indigo'
                                    return <View key={idx} style={tailwind(`w-48 bg-${style}-200 px-6 py-2 mt-5 rounded`)}>
                                          <Text style={tailwind(`text-${style}-900 font-bold capitalize`)}
                                                key={idx} title={difficulty}
                                                onPress={() => startGame(difficulty)} >play in {difficulty}
                                          </Text>
                                    </View>
                              })

                        }

                        {/* <View style={tailwind(`w-48 bg-orange-200 px-6 py-2 mt-5 rounded`)}>
                                                <Text style={tailwind(`text-orange-900 font-bold capitalize`)}
                                                      key={idx} title={difficulty}
                                                      onPress={() => navigation.navigate('leaderboards')} >play in {difficulty}
                                                </Text>
                                          </View> */}

                  </View>

            </View >

      );
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
      },
      buttonsContainer: {
            padding: 10
      }
});

