import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {useState, useEffect} from 'react'

const App = () => {
const  [albums, setAlbums] = useState([])



  return (
    <div className="App">
      <h1>Hello MusicReact</h1>
      <input type="text" onChange={handleAlbumSearch}/> 
    </div>
  );
}

export default App;
