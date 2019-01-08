import { isLoadingReducer } from './isLoading'
import { housesReducer } from './getHouses'
import * as actions from '../actions/actions'

describe('reducers', () => {

  describe('isLoadingReducer', () => {
    
    it('Should return default state', () => {
      const expected = false

      expect(isLoadingReducer(undefined, {})).toEqual(expected)
    })
    
    it('Should return a bool if passed IS_LOADING action', () => {
      const expected = true

      expect(isLoadingReducer(false, actions.isLoading(true))).toEqual(expected)
    })
  })

  describe('getHousesReducer', () => {

    it('Should return default state', () => {
      const expected = []

      expect(housesReducer(undefined, {})).toEqual(expected)
    })
    
    it('Should return houses if passed Get_HOUSES action', () => {
      const mockHouses = [{name: 'some house'}, {name: 'anotherHouse'}]
      const expected = [...mockHouses]

      const result = housesReducer(mockHouses, actions.getHouses(mockHouses))
      expect(result).toEqual(expected)
    })
  })
})