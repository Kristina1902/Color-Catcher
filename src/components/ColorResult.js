import React from 'react'

export const ColorResult = ({ paletteResult}) => {
        return (
            <div>
                <div id='colorResultContainer' > 
                {paletteResult.map((color, index) => {
                    return (
                       
                        <div key={index}>
                             <div className='colorBox' key={index} style={{backgroundColor: color}}> </div>
                             <p >{color}</p>
                        </div> 
                      
                    )
                })}   
         </div>
         
            </div>
        )
}
export default ColorResult;