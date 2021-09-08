import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title, onAdd, showAdd}) => {

    

    return (
        <header className="header">
            <h1> {title}</h1>
            <Button  text={ !showAdd ? 'Add' : 'Close'} color = { !showAdd ? 'green' : 'red'}  onClick={onAdd} />
            
        </header>
    )
}

/*
? you can add styling to the element either inline, or you can create a different variable for it. or style in a different style
*/
// css in Jss
// const headerStyle = {
//     color: 'red', 
//     backgroundColor: 'green'
// }

/*
? you can also set default props, but setting a prop for the element in the root component will overwrite it
*/
Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

/*
? you can also specify type for your props, just to give you more control and security
* you have to import the proptype module first
*/


export default Header
