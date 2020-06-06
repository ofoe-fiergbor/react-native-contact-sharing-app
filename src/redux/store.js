import {createStore, applyMiddleware} from 'redux'
import authReducer from './reducer/authReducer'
import thunk from 'redux-thunk'
import { AsyncStorage } from 'react-native'
import { persistReducer, persistStore } from 'redux-persist'

const persistConfig = {
    key:'root',
    storage: AsyncStorage
}

const persistedReducer =  persistReducer(persistConfig, authReducer)

let store =  createStore(persistedReducer, applyMiddleware(thunk))

let persistor =  persistStore(store)

export {store, persistor}