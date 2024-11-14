import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'

const Home = () => {
  const [file, setFile] = useState(null);
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/template', { state: { file, text } });
  };

  return (
    <div className='container'>
      <h1>Home Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          onChange={(e) => setFile(URL.createObjectURL(e.target.files[0]))}
        />
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your text"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;
