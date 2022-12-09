import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {useState, useEffect} from 'react'
import NewForm from './components/newalbum'
import Album from './components/Album'

const App = () => {
const  [albums, setAlbums] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3000/albums')
      .then((response)=> {
        setAlbums(response.data)
      })
  }, [])

  return (
    <div className="App">
      <h1>Hello MusicReact</h1>
      
      {/* <input type="text" onChange={handleAlbumSearch}/>  */}
      <NewForm albums={albums} setAlbums={setAlbums}/>

    
            <Album albums={albums}/>
         
    </div>
  );
}

export default App;
