import React, { useState, useEffect } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { updateBoardBlockAction } from '../store/actions'
import tailwind from 'tailwind-rn';
export default function Row({ rowIdx, blockIdx, block, lastCol, isThird }) {
      const dispatch = useDispatch()
      const editableBlocks = useSelector(state => state.boardReducer.editableBlocks)
      const blockStyle = editableBlocks[rowIdx][blockIdx] ? 'w-10 h-10 text-center bg-gray-300 text-gray-900 border-blue-900 border-l border-t' : 'w-10 h-10 text-center bg-gray-600 text-gray-200 border-blue-900  border-l border-t'
      const textInputStyle = editableBlocks[rowIdx][blockIdx] ? 'text-center text-gray-900 font-semibold' : 'text-center text-gray-100 font-bold'
      const [value, setValue] = useState(String(block))


      useEffect(() => {
            setValue(String(block == 0 ? "" : block))
      }, [block])

      function onChangeBlock(text) {
            setValue(text)
            const payload = {
                  rowIdx,
                  blockIdx,
                  value: +text
            }
            dispatch(updateBoardBlockAction(payload))
      }

      return (
            <View style={[, tailwind(blockStyle), { borderRightWidth: lastCol || isThird }]}>
                  <TextInput style={tailwind(textInputStyle)} editable={editableBlocks[rowIdx][blockIdx]} selectTextOnFocus={editableBlocks[rowIdx][blockIdx]} value={value} keyboardType={'numeric'} maxLength={1}
                        onChangeText={text => onChangeBlock(text)}
                  />
            </View>
      )
}


