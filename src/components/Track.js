import React, { Component } from 'react';

import '../styles/track.css';

export default class Track extends Component {
  render() {
    return(
      <div className='listed-song'>
        <p className="name">{this.props.track.track_name}</p>
        <a href="javascript:void(0)">
          <i className="favorite-button far fa-heart fa-1x fa-fw"></i>
        </a>
      </div>
    )
  }
}
