import React, { Component } from 'react';

import '../styles/search.css';

export default class Search extends Component {
  render() {
    return(
      <div className='search-header'>
        <div className="search-header-text">
          <h1>search.</h1>
        </div>
        <div className="search-field">
          <input type="text"
                 id="artist-search-name"
                 placeholder="got an artist in mind?"
          />
          <button className="search-button" id="artist-search" type="button" name="search">
            <i className="searchy fas fa-search fa-5x fa-fw"></i>
          </button>
        </div>

        <div className="songs-header">
          <h2>browse available artists</h2>
        </div>
      </div>
    )
  }
}

// <header>
//       <h1>search.</h1>
//       <section class="search-field">
//         <input type="text" id="artist-search-name" placeholder="got an artist in mind?"
//         ><button class="search-button" id="artist-search" type="button" name="search"><i class="searchy fas fa-search fa-5x fa-fw"></i></button>
//       </section>

//       <section class="songs-header">
//         <h2>browse available artists</h2>
//       </section>
//     </header>
