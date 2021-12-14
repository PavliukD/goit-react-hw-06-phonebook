import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import s from './ContactList.module.css'
import actions from '../../redux/phonebook/phonebook-actions'
import {getContacts} from '../../redux/phonebook/phonebook-selectors'

export default function ContactList(){
    const contacts = useSelector(getContacts)
    const dispatch = useDispatch()
 
    return(
        <ul className = {s.list}>
            {contacts.map(contact => {
                return(
                    <li key = {contact.id} id = {contact.id} className = {s.item}>
                        <p>{contact.name}: {contact.number}</p>
                        <button onClick={() => dispatch(actions.delContact(contact.id))} className = {s.button}>Delete</button>
                    </li>
                )
            })}
        </ul>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.array,
}