
const Header = (props) => {
    return (
        <header>
            <h1> {props.title}</h1>
        </header>
    )
}

/*
? you can also set default props, but setting a prop for the element in the root component will overwrite it
*/
Header.defaultProps = {
    title: 'Task Tracker'
}

/*
? you can also specify type for your props
*/


export default Header
