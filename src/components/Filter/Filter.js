import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { filterContacts } from '../../redux/phonebook/phonebook-actions'

function Filter({onChange, value}){
    return(
        <>
        <p>Find contacts by name</p>
          <input
                type="text"
                name="filter"
                onChange = {(event) => onChange(event.target.value)}
                value = {value}
            />
        </>
    )
}

const mapStateToProps = state => ({
    value: state.filter,
})

const mapDispatchToProps = dispatch => ({
    onChange: text => dispatch(filterContacts(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)

Filter.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string
}