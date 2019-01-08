import { mapStateToProps, mapDispatchToProps } from './App'
import { getHousesThunk } from '../../thunks/getHouses';

jest.mock('../../thunks/getHouses')

describe('mapStateToProps', () => {

  it('Should return a props object with two properties', () => {
    const mockState = {
      houses: [{name: 'some house'}, {name: 'anotherHouse'}],
      isLoading: false
    }

    const expected = {...mockState}
    const result = mapStateToProps(mockState)
    expect(result).toEqual(expected)
  })
})

describe('mapDispatchToProps', () => {
  
  it('should call dispatch with getHousesThunk', async () => {
    const mockDispatch = jest.fn()
    const actionToDispatch = await getHousesThunk()
    const mappedProps = mapDispatchToProps(mockDispatch)
    
    mappedProps.getHouses()
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
})