import logger from 'redux-logger';
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { inputSlice } from './slice/inputSlice'

const middleware = process.env.NODE_ENV === 'development' ? [logger] : [];

export const store = configureStore({
  reducer: {
    input: inputSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    middleware
  ),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;