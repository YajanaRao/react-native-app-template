import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import { propertiesApi } from './features/properties/propertiesSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    [propertiesApi.reducerPath]: propertiesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(propertiesApi.middleware),
})