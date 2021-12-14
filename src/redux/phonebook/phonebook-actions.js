import { nanoid } from 'nanoid'

const addContact = contact => ({
    type: 'phonebook/addContact',
    payload: {
        id: nanoid(),
        name: contact.name,
        number: contact.number
    }
})

const delContact = id => ({
    type: 'phonebook/delContact',
    payload: {
        id
    }
})

const filterContacts = text => ({
    type: 'phonebook/filterContacts',
    payload: {
        text
    }
})

export  {addContact, delContact, filterContacts}