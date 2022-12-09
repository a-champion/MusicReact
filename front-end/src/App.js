import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {useState, useEffect} from 'react'
import NewForm from './components/newalbum'
import Album from './components/Album'

const App = () => {
const  [albums, setAlbums] = useState([])

  const handleDeleteAlbum = (albumData) => {
    console.log(albumData);
    axios
         .delete(`http://localhost:3000/albums/${albumData._id}`)
         .then(()=> {
          axios
            .get('http://localhost:3000/albums')
            .then((response)=>{
              setAlbums(response.data);
            })
         })
  }

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

    {
      albums.map((album) => {
        return(
          <Album album={album} handleDeleteAlbum={handleDeleteAlbum} setAlbums={setAlbums}/>
        )
      })
    }
         
    </div>
  );
}

export default App;
