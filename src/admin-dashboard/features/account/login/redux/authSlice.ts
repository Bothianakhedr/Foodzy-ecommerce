import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  token: string | null;
};

const initialState: AuthState = {
  token: localStorage.getItem("token") || null,
};

 const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    clearToken: (state) => {
      state.token = null;
      localStorage.removeItem("token"); 
    },
  },
});
export const { setToken, clearToken } = authReducer.actions;
export default authReducer.reducer;