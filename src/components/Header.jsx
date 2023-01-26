import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


function Header({ headerTitle, bgColor, textColor }) {

    return (
        <header style={{backgroundColor: bgColor}}>
            <div className="container">
                <Link to="/">
                    <h2 style={{color: textColor}}>{headerTitle}</h2>
                </Link>
            </div>
        </header>
    )
}

Header.defaultProps = {
    headerTitle: 'Default Header Title',
    bgColor: "rgba(0,0,0,0.5)",
    textColor: "#ff6a95",
}

Header.propTypes = {
    headerTitle: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}
 
export default Header
