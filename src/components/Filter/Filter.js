import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import actions from '../../redux/phonebook/phonebook-actions'
import {getFilter} from '../../redux/phonebook/phonebook-selectors'

export default function Filter(){
    const value = useSelector(getFilter)
    const dispatch = useDispatch()

    return(
        <>
        <p>Find contacts by name</p>
          <input
                type="text"
                name="filter"
                onChange = {(event) => dispatch(actions.filterContacts(event.target.value))}
                value = {value}
            />
        </>
    )
}

Filter.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string
}