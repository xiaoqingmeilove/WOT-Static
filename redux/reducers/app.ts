import { AnyAction } from 'redux'
import { actionTypes } from '../actionTypes'

const reducer = (state: any = {}, action: AnyAction) => {
  switch (action.type) {
    case actionTypes.INIT_APP:
      return {
        ...state,
        ...action.data
      }
    default:
      return state
  }
}

export default reducer
