import React from 'react'

export const ColorResult = ({ paletteResult}) => {
        return (
            <div>
                <div style={{display:'flex', flexWrap:'wrap', flexDirection:'row', justifyContent:'space-evenly', width:'100%',marginBottom:'20px'}}> 
                {paletteResult.map((color, index) => {
                    return (
                       
                        <div key={index}>
                             <div key={index} style={{backgroundColor: color, margin:'20px', width:'100px', height:'100px', borderRadius:'50%'}}> </div>
                             <p >{color}</p>
                        </div> 
                      
                    )
                })}   
         </div>
         
            </div>
        )
}
export default ColorResult;