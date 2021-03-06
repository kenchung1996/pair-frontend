import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

class Campers extends Component {
  constructor(props){
    super(props);
    var date = new Date(this.props.camper.endTime).toTimeString();
    var setup = this.props.camper.setup;

    this.state = { end: (date.substr(0,5) + ' ' + date.substr(9, date.length)), 
                   techSetup: Array.isArray(setup) ? setup.join(', ') : setup};
  }
  
  render() {
    return (
      <div className='user-card'>
        <a href={'https://forum.freecodecamp.com/users/' + this.props.camper.username}>
        <img className='profile-images' height="120" width="120" src={'https://forum.freecodecamp.com/user_avatar/forum.freecodecamp.com/' + this.props.camper.username + '/120/202_1.png'} alt={this.props.camper.username + '\'s profile image'} />
        </a>
        <div className='user-card-info'>
          <p className='user-card-name'><a href={'https://forum.freecodecamp.com/users/' + this.props.camper.username}>{this.props.camper.username}</a></p>
          <p className='user-card-interests'>{this.props.camper.interests}</p>
          <p className='user-card-setup'><b>Preferred Pairing Technology(s):</b> {this.state.techSetup}</p>
          <p className='user-card-availability'><b>Available until:</b> {this.state.end}</p>
          <form action={'https://enigmatic-dawn-95873.herokuapp.com/api/v1/' + this.props.camper._id} id={this.props.camper._id} method='post'>
            <input type='hidden' name='idToDelete' id='idToDelete' value={this.props.camper_id} />
            <Button type='submit' className='circle-button' bsStyle="danger" bsSize="small">
              Delete Post <Glyphicon glyph='trash' />
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default Campers;
