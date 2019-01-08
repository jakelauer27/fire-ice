import { getHouses, isLoading } from './actions'

describe('actions', () => {

  describe('getHouses', () => {

    it('Should return an action object with type of GET_HOUSES', () => {
      const mockHouses = [{name: 'some house'}, {name: 'anotherHouse'}]
      const expected = {
        type: 'GET_HOUSES',
        houses: mockHouses
      }

      expect(getHouses(mockHouses)).toEqual(expected)
    })
  })

  describe('isLoading', () => {

    it('Should return an action object with the type of IS_LOADING', () => {
      const expected = {
        type: 'IS_LOADING',
        bool: true
      }

      expect(isLoading(true)).toEqual(expected)
    })
  })
})