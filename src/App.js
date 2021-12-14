// import { useState, useEffect } from "react";
// import { nanoid } from 'nanoid'
// import { useSelector, useDispatch } from "react-redux";
import ContactForm from "./components/ContactForm/ContactForm";
// import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";
// import rootReduser from "./redux/phonebook/phonebook-reducers";
// import store from "./redux/store";



function App(){

  // console.log(store.getState())
  // console.log(rootReduser)


  // const [contacts, setContacts] = useState(initialContacts)
  // const [filter, setFilter] = useState('')
  // const [filteredContacts, setFilteredContacts] = useState([])

  // useEffect(() => {
  //   const savedContacts = JSON.parse(localStorage.getItem('contacts'))
  //   if (savedContacts){
  //     setContacts(savedContacts)
  //   }
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts))
  // }, [contacts])

  // useEffect(() => {
  //   if (filter === ''){
  //     setFilteredContacts(contacts)
  //     return
  //   }
  //   setFilteredContacts(contacts.filter(contact => {
  //     return contact.name.toLowerCase().includes(filter.toLowerCase())
  //   }))
  // }, [filter,contacts])


  // const filterInputChange = (event) => {
  //   setFilter(event.target.value)
  // }

  // const formSubmit = (user) => {
  //   if (contacts.some(contact => {
  //     return contact.name.toLowerCase() === user.name.toLowerCase()
  //    })){
  //      return alert(`${user.name} is already in cotacts`)
  //    }

  //    setContacts(prev => prev.concat({
  //     id: nanoid(),
  //     name: user.name,
  //     number: user.number 
  //    }))
  // }

  // const deleteContact = (event) => {
  //   const contDelId = contacts.map(contact => {
  //     return contact.id
  //   }).indexOf(event.target.parentElement.id)
  //   const editedContacts = [...contacts]
  //   editedContacts.splice(contDelId, 1)
  //   setContacts(editedContacts)
  // }


    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        {/* <Filter onChange={filterInputChange} value = {filter}/> */}
        {/* <ContactList contacts = {filteredContacts} onClick = {deleteContact}/> */}
        <ContactList />
      </>
      // <div>WTF</div>
    )
  
}

export default App;

