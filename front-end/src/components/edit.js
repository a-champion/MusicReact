import React, { useState} from 'react';
import axios from 'axios';

const Edit = (props) => {

    const [updatedAlbumTitle, setUpdatedAlbumTitle] = useState()
    const [updatedAlbumArtist, setUpdatedAlbumArtist] = useState()
    const [updatedAlbumGenre, setUpdatedAlbumGenre] = useState()
    const [updatedAlbumCover, setUpdatedAlbumCover] = useState()
    const [listened, setListened] = useState()
    const [liked, setLiked] = useState()

    const handleUpdateAlbumTitle = (event) => {
        console.log(event.target.value);
        setUpdatedAlbumTitle(event.target.value)
    }
    const handleUpdateAlbumArtist = (event) => {
        setUpdatedAlbumArtist(event.target.value)
    }
    const handleUpdateAlbumGenre = (event) => {
        setUpdatedAlbumGenre(event.target.value)
    }
    const handleUpdateAlbumCover = (event) => {
        setUpdatedAlbumCover(event.target.value)
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
    const handleUpdateAlbum = (albumData) => {
        console.log(albumData + 'albumdata') ;

        axios
            .put(`http://localhost:3000/albums/${albumData._id}`,
            {
                title: updatedAlbumTitle,
                artist: updatedAlbumArtist,
                genre: updatedAlbumGenre,
                cover: updatedAlbumCover,
                listened: listened,
                liked: liked
            }
        ).then(() => {
            axios
                .get('http://localhost:3000/albums')
                .then((response)=> {
                    props.setAlbums(response.data)
                    
                })
        })
    }


    return(
        <div>
            <div>
            <form onSubmit={(event)=> {handleUpdateAlbum(props.album)}}>
                <input type="text" placeholder={props.album.title} onChange={handleUpdateAlbumTitle}/><br/>
                <input type="text" placeholder={props.album.artist} onChange={handleUpdateAlbumArtist}/><br/>
                <input type="text" placeholder={props.album.genre} onChange={handleUpdateAlbumGenre}/><br/>
                <input type="text" placeholder={props.album.cover} onChange={handleUpdateAlbumCover}/><br/>
                <input type="checkbox" onChange={handleListened}/> Listened?<br/>
                <input type="checkbox" onChange={handleLiked}/> Liked?<br/>
                <button type="submit">Edit Album</button>
            </form>
            
        </div>
        </div>
    )
}

export default Edit;