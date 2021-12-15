import { combineReducers, configureStore } from "@reduxjs/toolkit"
import {
  persistStore,
  persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {itemsReducer, filterReducer} from "./phonebook/phonebook-reducers"



const phonebookPersistConfig = {
    key: 'phonebook',
    storage,
    blacklist: ['filter'],
}

const rootReducer = combineReducers({
    items: itemsReducer,
    filter: filterReducer,
})

const persReducer = persistReducer(phonebookPersistConfig, rootReducer)

const store = configureStore({
    reducer: persReducer,
})

const persistor = persistStore(store)

export {store, persistor}