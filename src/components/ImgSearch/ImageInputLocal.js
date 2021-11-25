import React from 'react'




export const ImageInputLocal = (props) => {
    return (
        <div>
            <h3>Upload a image</h3>
            <label htmlFor="fileUploadInput"> <i className="fas fa-camera fa-2x"></i></label>
            <input onChange={props.getImage} type="file" name="" id="fileUploadInput" accept='image/*' />

        </div>
    )
}

export default ImageInputLocal
