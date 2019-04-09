import React, { Component } from 'react';

import '../styles/artist.css';

export default class Artist extends Component {
  render() {
    return(
      <div className='listed-artist'>
        <p className='artist_name'>{this.props.artist.artist_name}</p>
      </div>
    )
  }
}
