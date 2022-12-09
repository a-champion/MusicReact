import React from 'react';

const Album = (props) => {
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
                </div>
            </div>
        )
    })}
    </>
  )
}

export default Album