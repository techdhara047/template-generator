import React, { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toPng } from 'html-to-image';
import { saveAs } from 'file-saver';
import './Template.css';

const Template = () => {
  const location = useLocation();
  const { file, text } = location.state || {};
  const divRef = useRef(null);
 
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const [fontSize, setFontSize] = useState(16);
  const [fileName, setFileName] = useState('1');

  const handleHeight = (height) => {
    console.log(height);
    
    !height ?setHeight('fit-content'): setHeight(height+"px");
   
  }
  const handleWidth = (width) => {

    !width ?setWidth('fit-content'): setWidth(width+"px");

  }
  const handleFontSize = (size) => {
   if( size > 50) {
    setFontSize(16)
   }else {
    setFontSize(size)
   }

  }
  

  const handleDownload = () => {
    if (divRef.current) {
      toPng(divRef.current)
        .then((dataUrl) => {
          saveAs(dataUrl, fileName+'.png'); // Save the image
        })
        .catch((error) => {
          console.error('Error generating image:', error);
        });
    }
  };
  

  return (
    <div className="box">
    
      <div className="inputs">   
       
        <div className="form-input">
                <label htmlFor="">Width: </label>
                <input type="text" placeholder='Width' onChange={(e)=> handleWidth(e.target.value)}/>
        </div>
        <div className="form-input">
            <label htmlFor="">Height: </label>
            <input type="text" placeholder='Height' onChange={(e)=> handleHeight(e.target.value)}/>
        </div>
        <div className="form-input">
            <label htmlFor="">Text Size: </label>
            <input type="number" max="50" value={fontSize} onChange={(e)=> handleFontSize(e.target.value)}/>
        </div>
        
      
     
      </div>
      
     <div className="center">
     {file && (
        
        <div className="template"  ref={divRef}>
        <img
           src={file}
           alt="Uploaded"
           style={{
             height,
             width
         }}
         />
          <p style={{fontSize: fontSize+"px"}}>{text}</p>
       </div>
      
     )}
    <div className="download">
      <input type="text" placeholder='Enter file name' onChange={(e) => setFileName(e.target.value)}/>
    <button className='button' onClick={handleDownload}>Donwload</button>
    </div>
     </div>
    
    </div>
  );
};

export default Template;
