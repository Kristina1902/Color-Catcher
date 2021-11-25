import React from 'react'


const ImgInputURL = React.forwardRef((props,ref) => {
    return (
        <div className="imgInputContainer">
            <input type="text" className="imgInput" onChange={props.onSearch} ref={ref}/>
            <button className='paletteBtn' onClick={props.makeAPICall}>Get Pallete</button>
            <button className='resetBtn' onClick={props.handleReset}>Clear</button>
        
         
  
            
        </div>
    )
})

export default ImgInputURL
