import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "@/lib/client";
import type { Session } from '@supabase/supabase-js';

export const fetchUserSession = createAsyncThunk("auth/session", async () => {
    const { data: { session } } = await supabase.auth.getSession();
    return session;
});

interface initialStateProps {
    session: Session | null,
    isLoading: boolean,
    isAuthenticated: boolean
}

const initialState: initialStateProps = {
    session: null,
    isLoading: true,
    isAuthenticated: false
};

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        logout: (state) => {
            state.session = null;
            state.isAuthenticated = false; 
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserSession.pending, (state) => {
                state.isLoading = true; 
            })
            .addCase(fetchUserSession.fulfilled, (state, action) => {
                state.session = action.payload;
                state.isAuthenticated = !!action.payload;
                state.isLoading = false; 
            })
            .addCase(fetchUserSession.rejected, (state) => {
                state.session = null;
                state.isAuthenticated = false;
                state.isLoading = false;
            });
    }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;