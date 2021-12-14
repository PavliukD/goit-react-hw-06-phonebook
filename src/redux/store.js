// import { createStore } from "@reduxjs/toolkit"
import { configureStore } from "@reduxjs/toolkit"
import rootReduser from "./phonebook/phonebook-reducers"

// const state = {
//     items: [],
//     filter: ''
// }

const store = configureStore({
    reducer: rootReduser,
})

export default store