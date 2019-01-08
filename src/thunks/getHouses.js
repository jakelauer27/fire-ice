import { getHouses } from '../actions/actions'
import { isLoading } from '../actions/actions'

export const getHousesThunk = () => {
  return async (dispatch) => {
    try { 
      dispatch(isLoading(true))
      const response = await fetch('http://localhost:3001/api/v1/houses')
      const data = await response.json()
      dispatch(getHouses(data))
      dispatch(isLoading(false))
    } catch(error) {
      return new Error(error)
    }
  }
}