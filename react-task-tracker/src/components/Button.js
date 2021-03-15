import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
    
    // no longer need cause passed from header as proptype
    // const onClick = (e) => {
    //     console.log(e)
    // }
    
    return (
        <button
            onClick={onClick}
            style={{ backgroundColor: color }}
            className = 'btn'
        >
            {text}
        </button>
    )
}

Button.defaultsProps = {
    color: 'steelblue'
}
Button.prototypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
