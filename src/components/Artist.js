import React from 'react';

import '../styles/artist.css';

const Artist = ({ handleTrackShow, artist }) => {
    return(
      <div className='listed-artist'>
        <button className="artist_name" 
                onClick={() => { handleTrackShow(artist.artist_id) }}
        >
          {artist.artist_name}
        </button>
      </div>
    );
}

export default Artist;
