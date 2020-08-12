import { SET_BOARD, CLEAR_BOARD, SOLVE_BOARD, SET_STATUS } from "../actions/types"

const initialState = {
      data: [],
      isEditable: [],
      status: ''
}

export default (state = initialState, { type, payload }) => {
      switch (type) {

            case SET_BOARD:
                  console.log('MASUK SET BOARD')
                  console.log(payload)
                  let array = payload.map(row => row.map(block => block === 0))
                  console.log(`lewat===================`)
                  return {
                        ...state,
                        data: payload,
                        isEditable: array
                  }

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
