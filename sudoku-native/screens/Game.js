import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Text, View, KeyboardAvoidingView } from 'react-native';
import { setBoardAsync, solveBoardAsync, clearBoardAction, validateBoardAsync } from "../store/actions";
import Row from '../components/Row';
import Loading from '../components/Loading'
import tailwind from 'tailwind-rn';
import CountDown from 'react-native-countdown-component';



export default function Start({ navigation, route }) {


      const dispatch = useDispatch()
      const { difficulty, name } = route.params
      const board = useSelector(state => state.boardReducer.data)
      const initialBoard = useSelector(state => state.boardReducer.initialBoard)
      const status = useSelector(state => state.boardReducer.status)
      const initialTime = 200
      const [time, setTime] = useState(0)
      const isRunning = status === 'solved' ? false : true
      useEffect(() => {
            const payload = {
                  difficulty
            }
            dispatch(clearBoardAction())
            dispatch(setBoardAsync(payload))
      }, [])

      useEffect(() => {
            if (status !== '') alert(`Board: ${status}`)
      }, [status])

      function solveBoard() {
            dispatch(solveBoardAsync(initialBoard))
      }

      function validateBoard() {
            dispatch(validateBoardAsync(board))
      }

      function finishGame() {
            if (status === 'solved') {
                  navigation.navigate('Finish', { name, time })
            }
      }
      function timeUp() {
            alert('Time Up!')
            navigation.navigate('Start')
      }

      if (!board.length) return <Loading />

      return <KeyboardAvoidingView>
            <CountDown
                  until={initialTime}
                  onChange={(time) => { setTime(initialTime - time) }}
                  running={isRunning}
                  onFinish={() => timeUp()}
                  onPress={() => alert('hello')}
                  size={15}
                  timeToShow={['M', 'S']}
                  timeLabels={{ m: 'MM', s: 'SS' }}
            />
            <KeyboardAvoidingView style={{ marginTop: 10 }} behavior='height'>
                  {
                        board.length > 0 && board.map((row, idx) => {
                              const lastRow = board.length === (idx + 1) ? 1 : 0
                              const isThird = (idx + 1) % 3 === 0 ? 3 : 0


                              return <View style={{ alignItems: 'center' }} key={idx}>
                                    < Row rowIdx={idx} lastRow={lastRow} isThird={isThird} row={row} />
                              </View>

                        })
                  }
            </KeyboardAvoidingView>


            <View>
                  {
                        board.length > 0 && <View style={tailwind(`w-32 bg-orange-200 px-6 py-2 mt-5 rounded`)}>
                              <Text style={tailwind('text-orange-900 font-bold')} onPress={() => solveBoard()} >Solve</Text>
                        </View>
                  }

                  {
                        board.length > 0 && <View style={tailwind(`w-40 bg-yellow-200 px-6 py-2 mt-5 rounded`)}>
                              <Text style={tailwind('text-yellow-900 font-bold')} onPress={() => validateBoard()} >Validate</Text>
                        </View>
                  }

                  {
                        status === 'solved' && <View style={tailwind(`w-48 bg-indigo-200 px-6 py-2 mt-5 rounded`)}>
                              <Text style={tailwind('text-indigo-900 font-bold')} onPress={() => finishGame()} >Finish</Text>
                        </View>
                  }

                  <StatusBar />
            </View >
      </KeyboardAvoidingView>
}