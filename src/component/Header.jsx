import React from 'react'
import PropTypes from 'prop-types'


function Header({text}) {

    // OR  function Header(props)  AND add props. below
    return (
        <header>
            <div className="container">
                <h2>{text}</h2>
            </div>
        </header>
    )
}

//When no text is actually passed, we define a default
Header.defaultProps = {
    text: 'Feedback UI'
}

Header.protoTypes = {
    text: PropTypes.string
}

export default Header
