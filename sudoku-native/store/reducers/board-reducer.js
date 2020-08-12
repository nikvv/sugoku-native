import { SET_BOARD, UPDATE_BOARD_BLOCK, CLEAR_BOARD, SOLVE_BOARD, SET_STATUS } from "../actions/types"

const initialState = {
      initialBoard: [],
      data: [],
      editableBlocks: [],
      status: ''
}

export default (state = initialState, { type, payload }) => {
      switch (type) {

            case SET_BOARD:
                  let array = payload.map(row => row.map(block => block === 0))
                  return {
                        ...state,
                        data: payload,
                        initialBoard: payload,
                        editableBlocks: array
                  }

            case UPDATE_BOARD_BLOCK:
                  let newData = JSON.parse(JSON.stringify(state.data))
                  newData[payload.rowIdx][payload.blockIdx] = payload.value
                  return { ...state, data: newData }


            case SET_STATUS:
                  return { ...state, status: payload }

            case SOLVE_BOARD:
                  return { ...state, data: payload }

            case CLEAR_BOARD:
                  return { ...state, data: payload }

            default:
                  return state
      }
}
