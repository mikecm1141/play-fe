import React, { Component } from 'react';

import '../styles/artist.css';

export default class Artist extends Component {
  render() {
    return(
      <div className='listed-artist'>
        <button className="artist_name" 
                onClick={() => { this.props.handleTrackShow(this.props.artist.artist_id) }}
        >
          {this.props.artist.artist_name}
        </button>
      </div>
    )
  }
}
