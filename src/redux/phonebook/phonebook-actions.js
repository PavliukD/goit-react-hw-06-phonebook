import { createAction } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

const addContact = createAction('phonebook/addContact', (contact) => {
    return {
        payload:{
            id: nanoid(),
            name: contact.name,
            number: contact.number
        }
    }
})
const delContact = createAction('phonebook/delContact')
const filterContacts = createAction('phonebook/filterContacts')


const actions = {addContact, delContact, filterContacts}
export default actions