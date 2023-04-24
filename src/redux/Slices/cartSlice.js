import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  totalPrice: 0,
  items: [],
  totalCount: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload
      const existingItem = state.items.find(
        (item) =>
          item.title === newItem.title &&
          item.price === newItem.price &&
          item.activeSize === newItem.activeSize &&
          item.activeType === newItem.activeType
      )

      if (existingItem) {
        existingItem.count++
        state.totalPrice += existingItem.price
        state.totalCount += 1
      } else {
        state.items.push({ ...newItem, count: 1 })
        state.totalPrice += newItem.price
        state.totalCount += 1
      }
    },
    clearAll(state) {
      state.items.length = 0
      state.totalPrice = 0
      state.totalCount = 0
    },
    clearItem(state, action) {
      const removedItem = state.items[action.payload]
      state.items.splice(action.payload, 1)
      state.totalCount -= removedItem.count
      state.totalPrice -= removedItem.price * removedItem.count
    },
    addCount(state, action) {
      const item = state.items.find((_, i) => i === action.payload)
      if (item) {
        item.count += 1
        state.totalPrice += item.price
        state.totalCount += 1
      }
    },
    reduceCountItem(state, action) {
      const item = state.items.find((_, i) => i === action.payload)
      if (item && item.count > 1) {
        item.count -= 1
        state.totalPrice -= item.price
        state.totalCount -= 1
      }
    },
  },
})

export const { addItem, clearAll, clearItem, addCount, reduceCountItem } =
  cartSlice.actions
export default cartSlice.reducer
