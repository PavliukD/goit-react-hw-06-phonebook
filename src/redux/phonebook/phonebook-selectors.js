export const getContacts = state => {
    return state.items.filter(contact => contact.name.toLowerCase().includes(state.filter.toLowerCase()))
}

export const getFilter = state => state.filter