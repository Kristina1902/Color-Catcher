import React from 'react'

export const Header = () => {
    return (
        <div className="headerContainer">
            <h1 className='header'>Explore Colors</h1>
            <label className="imgInputLabel" htmlFor="imgInput">Paste an image Url:</label>
        </div>
    )
}

export default Header;
