import { configureStore, combineReducers } from "@reduxjs/toolkit";
import usersSlice from './usersSlice'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'
 

  const persistConfig = {
    key: 'users',
    storage,
  }
  
 const rootReducer = combineReducers({users: usersSlice})

  const persistedReducer = persistReducer(persistConfig, rootReducer)


const createStore = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
})

export let persistor = persistStore(createStore)

export default createStore

