import React from 'react';

const Album = (props) => {
  return (<>
    {props.albums.map((album, index) => {
        return(
            <div className="albumCard" key={album._id}>
                <div className="album">
                    <h3>{album.title}</h3>
                    {/* <img src={album.cover}/> */}
                </div>
            </div>
        )
    })}
    </>
  )
}

export default Album