import React, {Component} from 'react';
import 'styles/styles';
import logo from 'images/fs-logo';
import base from '../base';
import moment from 'moment';

export default class Main extends Component {
  constructor() {
    super();
    
    this.state = {
      videoURL: 'https://player.vimeo.com/external/158148793.hd.mp4?s=8e8741dbee251d5c35a759718d4b0976fbf38b6f&profile_id=119&oauth2_token_id=57447761',
      emailAddress: '',
      placeholder: 'Email Address',
      buttonDisabled: false
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    this.emailAddress.style.background = 'green';

    // capture email inputted in an object with a timestamp property, formatted using moment
    const timestamp = moment().format('MMMM Do YYYY, h:mm:ss A');
    const email = {
      emailAddress: this.emailAddress.value,
      timestamp
    };

    // Update the state for the individual address submitted
    this.setState({
      emailAddress: this.emailAddress.value,
      placeholder: 'Submitted',
      buttonDisabled: true
    });

    base.push('emails', {
      data: {email},
      then(err) {
        if (!err) {
          console.log('Post Success!');
        }
      }
    });
    this.emailForm.reset();
  }
  render() {
    let emailToggle = this.state.buttonDisabled ? 'Main__email Main__email--full' : 'Main__email'
    let buttonToggle = this.state.buttonDisabled ? 'Main__button Main__button--disabled' : 'Main__button'
    return(
      <div className='Main'>
        <div className='Main__video-container'>
          <video className='Main__video' muted autoPlay loop>
            <source src={this.state.videoURL} type='video/mp4'></source>
          </video>
        </div>
        <div className='Main__mask'></div>
        <div className='Main__container'>
          <div className='Main__content'>
            <img className='Main__logo' src={logo} />
            <form 
              className='Main__email-form' 
              ref={(input) => {this.emailForm = input}} 
              onSubmit={(e) => this.handleSubmit(e)}
            >
              <input 
                className={emailToggle}
                ref={(input) => {this.emailAddress = input}} 
                placeholder={this.state.placeholder}
                disabled={this.state.buttonDisabled}
              />
              <input 
                type='submit'
                className={buttonToggle}
                disabled={this.state.buttonDisabled} 
              />
            </form>
          </div>
        </div>
      </div>
    )
  }
};
