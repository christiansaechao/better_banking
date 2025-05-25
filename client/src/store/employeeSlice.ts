import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "@/lib/client";
import type { RootState } from "@/store/store";
import type { Tables } from "@/types/supabase-types";

export const fetchUserInfo = createAsyncThunk<
  Tables<"employees">,
  void,
  { state: RootState }
>("employee/fetchEmployee", async (_, { getState, rejectWithValue }) => {
  const state = getState();
  const session = state.auth?.session;

  if (!session) {
    return rejectWithValue("No active session");
  }

  const { data, error } = await supabase
    .from("employees")
    .select("*")
    .eq("auth_user_id", session.user.id)
    .single();

  if (error) {
    return rejectWithValue(error.message);
  }

  return data;
});

type EmployeeState = {
  data: Tables<"employees"> | null;
  loading: boolean;
  error: string | null;
};

const initialState: EmployeeState = {
  data: null,
  loading: false,
  error: null,
};

const employeeSlice = createSlice({
  name: "employee",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserInfo.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchUserInfo.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      });
  },
});

export default employeeSlice.reducer;
