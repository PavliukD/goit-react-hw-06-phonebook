import { useState } from "react";
import s from './ContactForm.module.css'


export default function ContactForm({onSubmit}){
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const inputChange = (event) => {
      switch(event.target.name){
        case 'name':
          setName(event.target.value)
          break
        case 'number':
          setNumber(event.target.value)
          break
        default:
          break
      }
    }

    
     const formSubmit = (event) => {
        event.preventDefault()
        onSubmit({
          name,
          number,
        })
      }

        return (
        <form onSubmit = {formSubmit} className ={s.form}>
          <label>
            <h3>Name</h3>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange = {inputChange}
              value = {name}
              className = {s.input}
            />
            <h3>Number</h3>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange = {inputChange}
              value = {number}
              className = {s.input}
            />
          </label>
          <button type = "submit" className = {s.button}>Add contact</button>
        </form> 
        )
}