import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Template from './pages/Template';

function App() {

  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/template" element={<Template />} />
    //   </Routes>
    // </Router>
    <Template />
  )
}

export default App
