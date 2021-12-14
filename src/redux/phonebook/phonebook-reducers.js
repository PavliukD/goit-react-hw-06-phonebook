import { combineReducers } from '@reduxjs/toolkit'

const initialState = [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ]

function itemsReducer(state = initialState, action){
    switch (action.type){
        case 'phonebook/addContact':
            if (state.some(contact => {
                return contact.name.toLowerCase() === action.payload.name.toLowerCase()
                })){
                    alert(`${action.payload.name} is already in cotacts`)
                    return state
                }
            return [...state, action.payload];
        case 'phonebook/delContact':
            return state.filter(contact => contact.id !== action.payload.id);
        default:
            return state
    }
}

function filterReduser(state ='', action){
    
    switch (action.type){
        case 'phonebook/filterContacts':
            return action.payload.text;
        default:
            return state;

    }
}

const rootReduser = combineReducers({
    items: itemsReducer,
    filter: filterReduser,
})


export default rootReduser
