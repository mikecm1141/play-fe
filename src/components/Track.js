import React, { Component } from 'react';

import { connect } from 'react-redux';

import '../styles/track.css';

class Track extends Component {
  constructor(props) {
    super(props);

    this.state = {
      iconClass: 'favorite-button far fa-heart fa-1x fa-fw',
      favorite: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { favorite } = this.state;
    if(favorite) {
      // Make API request to remove favorite
      // Set favorite to false
      // Set icon back to normal
      this.setState({ 
        iconClass: 'favorite-button far fa-heart fa-1x fa-fw',
        favorite: false
      });
    } else {
      // Make API request to set as favorite
      // Set favorite to true
      // Set icon to filled in
      this.setState({ 
        iconClass: 'favorite-button fas fa-heart fa-1x fa-fw',
        favorite: true
      });
    }
  }

  render() {
    const { track_name } = this.props.track;
    const { iconClass } = this.state;
    return(
      <div className='listed-song'>
        <div>
          <p className="name">{track_name}</p>
        </div>
        <div>
          <button onClick={this.handleClick}>
            <i className={iconClass}></i>
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Track);
