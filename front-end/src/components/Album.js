import React from 'react';
import axios from 'axios'

const Album = (props) => {

// const  [albums, setAlbums] = useState([])


  
  
  return (<>
    {props.albums.map((album, index) => {
        return(
            <div className="albumCard" key={album._id}>
                <div className="album">
                    <img src={album.cover}/>
                    <h3>{album.title}</h3>
                    <p>{album.artist}</p>
                    <p>{(album.listened === true) ? <p>Listened</p> : <p>Want to Listen</p>}</p>
                    <p>{(album.liked === true) ? <p>Liked</p> : <p>Didn't Like</p>}</p>
                    <hr/>
                    <button onClick={(event)=> {props.handleDeleteAlbum(album)}}>Delete</button>
                </div>
            </div>
        )
    })}
    </>
  )
}

export default Album