import { configureStore } from '@reduxjs/toolkit'
import appReducer from "./reducers/appReducer.ts";

export const store = configureStore({
    reducer: {
        app: appReducer,
    },
})

// Выведение типов `RootState` и `AppDispatch` из хранилища
export type RootState = ReturnType<typeof store.getState>
// Выведенные типы: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch