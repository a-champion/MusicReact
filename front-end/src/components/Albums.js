import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Album from './Album.js'

const Albums = () => {
    const [albums, setAlbums] = useState([])

    const getAlbums = () => {
        axios
        .get('http://localhost:3000/albums')
        .then((response) => {
            setAlbums(response.data);
        }).catch(err => {
            console.log(err);
        });
    }

    useEffect(() => {
        getAlbums();
    }, []);

  return (
    <>
    <Album albums={albums}/>
    </>
  )
}

export default Albums