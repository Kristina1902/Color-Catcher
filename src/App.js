import './App.css';
import {createRef, useState} from 'react'
import Header from './components/Header';
import ImgInputURL from './components/ImgSearch/ImageInputURL';
import ColorThief from 'colorthief';
import ColorResult from './components/ColorResult';
import ImageInputLocal from './components/ImgSearch/ImageInputLocal';
import ImgContainerLocal from './components/ImgContainerLocal';


const colorThief = new ColorThief();

function App() {
const [inputImgField, setInputImgField] = useState('');
const [paletteResult, setPalleteResults] = useState([]);
const [selectedImg, setSelectedImg] = useState('')
const [showImg, setShowImg] = useState(Boolean)
const ref = createRef()

const onSearch = (event) => {
  setInputImgField(event.target.value)
  setShowImg(true)
}

const setPalette = (colors) => {
  setPalleteResults(colors)
}

const getLocalImage = (e) => {
  const reader = new FileReader()
  reader.onload = () => {
    if(reader.readyState === 2){
      setSelectedImg(reader.result)
    }
  }
  reader.readAsDataURL(e.target.files[0])
  setShowImg(false)
}


const getColorPalette = () => {
let uploadedImg =  document.querySelector('#image')

const paletteColors = colorThief.getPalette(uploadedImg, 9);
setPalette(rgbToHexPalette(paletteColors)) 
}

const rgbToHex = (colorArray) => '#' + colorArray.map(x => {
  const hex = x.toString(16)
  return hex.length === 1 ? '0' + hex : hex
}).join('')

const rgbToHexPalette = (colorArray) => colorArray.flatMap(rgbToHex)

const makeAPICall = () => {
  fetch('https://morning-shore-76893.herokuapp.com/cors', {
    method:'post',
    headers: {'Content-Type' : 'application/json'},
    body: JSON.stringify({
      input: inputImgField
    })
  })
  .then(response => response.json())
  .then(response => {
    if(response) {
      setPalette(rgbToHexPalette(response)) 
    }
  })
}

const handleReset = () => {
  ref.current.value = null
  setInputImgField('')
  setPalette([])
  setSelectedImg('')
}

  return (
    <div className="App">
<Header/>

<ImgInputURL  ref={ref}  handleReset={handleReset }  onSearch={onSearch}  makeAPICall={makeAPICall}/>

{showImg ? 
<img src={inputImgField} alt="" className='img'/>

 : <ImgContainerLocal src ={selectedImg} getColorPalette={getColorPalette}/>}

<ImageInputLocal  getImage={getLocalImage}  />
<ColorResult  paletteResult={paletteResult} />
    </div>
  );
}


export default App;
