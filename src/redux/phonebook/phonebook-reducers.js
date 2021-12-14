import { createReducer } from '@reduxjs/toolkit'
import actions from './phonebook-actions'

const initialState = [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ]

const itemsReducer = createReducer(initialState, {
    [actions.addContact]: (state, action) => {
        if (state.some(contact => {
            return contact.name.toLowerCase() === action.payload.name.toLowerCase()
            })){
                alert(`${action.payload.name} is already in cotacts`)
                return state
            }
        return [...state, action.payload]
    },
    [actions.delContact]: (state, action) => state.filter(contact => contact.id !== action.payload),
})

const filterReducer = createReducer('', {
    [actions.filterContacts]: (state, action) => action.payload,
})


export {itemsReducer, filterReducer}
// const rootReduser = combineReducers({
//     items: itemsReducer,
//     filter: filterReduser,
// })


// export default rootReduser
