import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeCat: 0,
  sort: {
    name: 'популярности',
    sortProperty: 'rating',
  },
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setActiveCat(state, action) {
      state.activeCat = action.payload
    },
    setSort(state, action) {
      state.sort = action.payload
    },
  },
})

export const { setActiveCat, setSort } = filterSlice.actions
export default filterSlice.reducer
