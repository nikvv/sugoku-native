import { SET_RESULT, SET_RESULT_BLOCK } from "../actions/types"

const initialState = {
      data: []
}

export default (state = initialState, { type, payload }) => {
      switch (type) {

            case SET_RESULT:
                  console.log(payload, 'INI SET RESULT')
                  return { ...state, data: payload }
            case SET_RESULT_BLOCK:
                  console.log(payload, 'DARI SET_RESULT_BLOCK RESULT_REDUCER')
                  let newData = JSON.parse(JSON.stringify(state.data))
                  newData[payload.rowIdx][payload.blockIdx] = payload.value
                  return { ...state, data: newData }

            default:
                  return state
      }
}
