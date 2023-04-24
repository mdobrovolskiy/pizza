import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  logged: false,
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLogged(state, action) {
      state.logged = action.payload
    },
  },
})

export const { setLogged } = loginSlice.actions
export default loginSlice.reducer
