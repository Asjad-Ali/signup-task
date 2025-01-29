import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface AuthState {
  loading: boolean;
  success: boolean;
  error: string | null;
}

const initialState: AuthState = {
  loading: false,
  success: false,
  error: null,
};

export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (
    userData: {
      user_type: string;
      first_name: string;
      last_name: string;
      username: string;
      email: string;
      password: string;
      country: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        "https://django-dev.aakscience.com/signup/",
        userData
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data || "Internal error");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload as string;
      });
  },
});

export default authSlice.reducer;
