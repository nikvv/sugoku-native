import { SET_BOARD, CLEAR_BOARD, SET_RESULT, SOLVE_BOARD, SET_RESULT_BLOCK, SET_STATUS } from './types'
import axios from './axios.config.js'

const encodeBoard = (board) => board.reduce((result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === board.length - 1 ? '' : '%2C'}`, '')

const encodeParams = (params) =>
      Object.keys(params)
            .map(key => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
            .join('&');

export const setBoardAsync = (payload) => {
      return async (dispatch, getState) => {
            try {
                  const resp = await axios.get(`/board?difficulty=${payload.difficulty}`)
                  dispatch({
                        type: SET_BOARD,
                        payload: resp.data.board
                  })
            } catch (error) {
                  console.log(error)
            }

      }

}

export const solveBoardAsync = (board) => {

      const data = {
            board
      }
      console.log(data, 'PAYLOAD SOLVE')
      return async (dispatch, getState) => {
            try {
                  const resp = await axios.post('/solve', encodeParams(data), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
                  console.log(resp.data)
                  dispatch({
                        type: SOLVE_BOARD,
                        payload: resp.data.solution
                  })

            } catch (error) {
                  console.log(error)
            }
      }
}

export const validateBoardAsync = (board) => {
      const data = {
            board
      }

      return async (dispatch, getState) => {
            try {
                  const resp = await axios.post('/validate', encodeParams(data), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
                  console.log(resp.data)
                  dispatch({
                        type: SET_STATUS,
                        payload: resp.data.status
                  })
            } catch (error) {

            }
      }
}

export const setResultAction = (payload) => ({
      type: SET_RESULT,
      payload
})

export const setResultBlockAction = (payload) => {
      return (dispatch, getState) => {

            // type: SET_RESULT_BLOCK,
            // payload
      }

}


export const clearBoardAction = () => ({
      type: CLEAR_BOARD,
      payload: []
})

