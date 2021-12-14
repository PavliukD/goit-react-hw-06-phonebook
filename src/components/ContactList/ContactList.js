import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import s from './ContactList.module.css'
import { delContact } from '../../redux/phonebook/phonebook-actions'

function ContactList({contacts, delContact}){
    return(
        <ul className = {s.list}>
            {contacts.map(contact => {
                return(
                    <li key = {contact.id} id = {contact.id} className = {s.item}>
                        <p>{contact.name}: {contact.number}</p>
                        <button onClick={() => delContact(contact.id)} className = {s.button}>Delete</button>
                    </li>
                )
            })}
        </ul>
    )
}

const mapStateToProps = state => ({
    contacts: state.items,
})

const mapDispatchToProps = dispatch => ({
    delContact: id => dispatch(delContact(id))
})



export default connect(mapStateToProps, mapDispatchToProps)(ContactList)

ContactList.propTypes = {
    contacts: PropTypes.array,
}