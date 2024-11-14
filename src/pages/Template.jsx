import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Template.css';

const Template = () => {
  const location = useLocation();
  const { file, text } = location.state || {};
 
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);

  const handleHeight = (height) => {
    console.log(height);
    
    !height ?setHeight('fit-content'): setHeight(height+"px");
   
  }
  const handleWidth = (width) => {

    !width ?setWidth('fit-content'): setWidth(width+"px");

  }
  

  return (
    <div className="box">
    
      <div className="inputs">   
        <h1>Template Page</h1>
        <div className="form-input">
            <label htmlFor="">Height: </label>
            <input type="text" placeholder='Height' onChange={(e)=> handleHeight(e.target.value)}/>
        </div>
        <div className="form-input">
                <label htmlFor="">Width: </label>
                <input type="text" placeholder='Width' onChange={(e)=> handleWidth(e.target.value)}/>
        </div>
      
     
      </div>
      
      {file && (
        
         <div className="template"  >
         <img
            src={file}
            alt="Uploaded"
            style={{
              height,
              width
          }}
           
           
          />
           <p>{text}</p>
        </div>
       
      )}
    </div>
  );
};

export default Template;
