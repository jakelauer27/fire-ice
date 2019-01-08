export const getHouses = (houses) => ({
  type: 'GET_HOUSES',
  houses
})

export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  bool
})