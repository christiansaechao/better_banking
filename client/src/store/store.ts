import { configureStore } from '@reduxjs/toolkit'; 
import employeeReducer from "./employeeSlice";
import authReducer from './authSlice';

const store = configureStore({
    reducer: {
        employee: employeeReducer,
        auth: authReducer,
    }
});

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store

export default store;