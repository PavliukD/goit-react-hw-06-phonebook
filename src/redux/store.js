import { createStore } from "@reduxjs/toolkit"
import rootReduser from "./phonebook/phonebook-reducers"

const state = {
    items: [],
    filter: ''
}

const store = createStore(rootReduser)

export default store