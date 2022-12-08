import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const NewForm = (props) => {
    
    const [newAlbumTitle, setNewAlbumTitle] = useState()
    const [newAlbumArtist, setNewAlbumArtist] = useState()
    const [newAlbumGenre, setNewAlbumGenre] = useState()
    const [newAlbumCover, setNewAlbumCover] = useState()
    const [listened, setListened] = useState(false)
    const [liked, setLiked] = useState(false)

    const handleNewAlbumTitle = (event) => {
        setNewAlbumTitle(event.target.value)
    }
    const handleNewAlbumArtist = (event) => {
        setNewAlbumArtist(event.target.value)
    }

    const handleNewAlbumGenre = (event) => {
        setNewAlbumGenre(event.target.value)
    }

    const handleNewAlbumCover = (event) => {
        setNewAlbumCover(event.target.value)
    }

    const handleListened = (event) => {
        if (event.target.checked === true) {
            setListened(true)
        } else {
            setListened(false)
        }
    }

    const handleLiked = (event) => {
        if (event.target.checked === true) {
            setLiked(true)
        } else {
            setLiked(false)
        }
    }

    const handleNewAlbum = (event) => {
        event.preventDefault()
        event.target.reset()

        axios.post('http://localhost:3000/albums',
            {
                title: newAlbumTitle,
                artist: newAlbumArtist,
                genre: newAlbumGenre,
                cover: newAlbumCover,
                listened: listened,
                liked: liked
            }
        ).then(() => {
            axios
                .get('http://localhost:3000/albums')
                .then((response)=> {
                    console.log(response.data);
                    
                })
        })
    }

    return (
        <div>
            <form onSubmit={handleNewAlbum}>
                <input type="text" placeholder="album title" onChange={handleNewAlbumTitle}/><br/>
                <input type="text" placeholder="album artist" onChange={handleNewAlbumArtist}/><br/>
                <input type="text" placeholder="album genre" onChange={handleNewAlbumGenre}/><br/>
                <input type="text" placeholder="album cover" onChange={handleNewAlbumCover}/><br/>
                <input type="checkbox" onChange={handleListened}/> Listened?<br/>
                <input type="checkbox" onChange={handleLiked}/> Liked?<br/>
                <button type="submit">Submit Album</button>
            </form>
            
        </div>
    )
}

export default NewForm;