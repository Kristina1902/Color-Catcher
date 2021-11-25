import React from 'react'

const ImgContainerLocal = (props) => {
    return (
        <div>
            <img id='image' className='img'  alt="" src={props.src} onLoad={props.getColorPalette}/>
        </div>
    )
}

export default ImgContainerLocal;
