import React, { useState } from 'react';
import Edit from './edit'

const Album = (props) => {
  const [showEdit, setShowEdit] = useState(false)
  
  return (<>
    {/* {props.albums.map((album, index) => { */}
        {/* return( */}
            <div className="albumCard" key={props.album._id}>
                <div className="album">
                    <img src={props.album.cover}/>
                    
                    {showEdit === false ?
                    <div>
                        <h3>{props.album.title}</h3>
                        <p>{props.album.artist}</p>
                        <p>{(props.album.listened === true) ? <p>Listened</p> : <p>Want to Listen</p>}</p>
                        <p>{(props.album.liked === true) ? <p>Liked</p> : <p>Didn't Like</p>}</p>
                        <hr/>
                        <button onClick={(event)=> {props.handleDeleteAlbum(props.album)}}>Delete</button>
                        <button onClick={(event)=> {setShowEdit(true)}}>Edit</button>
                    </div>
                      :
                      <div>
                        <Edit album={props.album} setAlbums={props.setAlbums}/>
                      </div>
                    }
             </div>  
             </div>     
        {/* ) */}
    {/* })} */}
    </>
  )
}

export default Album