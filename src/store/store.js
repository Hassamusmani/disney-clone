import { configureStore } from '@reduxjs/toolkit'
import { reducer as userReducer } from '../features/user/userSlice';
import { reducer as movieReducer } from '../features/movie/movieSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store;