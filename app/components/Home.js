import React, { Component } from 'react';
import 'styles/styles';
import logo from 'images/fs-logo';
import mobilebg from 'images/mobilebg';
import base from '../base';
import moment from 'moment';

export default class Home extends Component {
  constructor() {
    super();
    
    this.state = {
      videoURL: 'https://player.vimeo.com/external/158148793.hd.mp4?s=8e8741dbee251d5c35a759718d4b0976fbf38b6f&profile_id=119&oauth2_token_id=57447761',
      emailAddress: '',
      placeholder: 'Email Address',
      buttonDisabled: true,
      inputDisabled: false,
    }
  }
  _handleChange(e) {
    let input = e.target.value;
    if (/(^\w.*@\w+\.\w)/g.test(input)) {
      console.log('%cValid email!', 'font-size: 16px; color: black; font-weight: bold')
      this.setState({buttonDisabled: false});
    } else {
      console.log('%cKeep going...', 'font-size: 16px; color: red; font-weight: bold')
      this.setState({buttonDisabled: true});
    }
  }
  _handleSubmit(e) {
    e.preventDefault();
    // capture email inputted in an object with a timestamp property, formatted using moment
    // const timestamp = moment().format('MMMM Do YYYY, h:mm:ss A');
    // Using just Date.now() as we want the raw timestamp for later
    const timestamp = Date.now();
    const email = {
      emailAddress: this.emailAddress.value,
      timestamp
    };
    // Update the state for the individual address submitted
    this.setState({
      emailAddress: this.emailAddress.value,
      placeholder: 'Submitted! Stay tuned.',
      buttonDisabled: true,
      inputDisabled: true,
    });
    base.push('emails', {
      data: {email},
      then(err) {
        if (!err) {
          console.log('%cPost Success!', 'font-size: 16px; color: green; font-weight: bold')
        }
      }
    });
    this.emailAddress.style.background = 'green';
    this.emailForm.reset();
  }
  render() {
    const { videoURL, placeholder, buttonDisabled, inputDisabled } = this.state;
    let emailToggle = buttonDisabled ? 'Home__email Home__email--full' : 'Home__email';
    let buttonToggle = buttonDisabled ? 'Home__button Home__button--disabled' : 'Home__button';
    return(
      <div className='Home'>
        <div className='Home__video-container'>
          <video className='Home__video' muted autoPlay loop>
            <source src={videoURL} type='video/mp4'></source>
          </video>
        </div>
        <div className="Home__video-container-mobile">
          <img className="Home__bg-image" src={mobilebg} />
        </div>
        <div className='Home__mask'></div>
        <div className='Home__container'>
          <img className='Home__logo' src={logo} />
          <form 
            className='Home__email-form' 
            ref={(input) => {this.emailForm = input}} 
            onSubmit={(e) => this._handleSubmit(e)}
            onChange={(e) => this._handleChange(e)}
          >
            <input 
              ref={(input) => {this.emailAddress = input}} 
              placeholder={placeholder}
              className={emailToggle}
              disabled={inputDisabled}
            />
            <input 
              type='submit'
              className={buttonToggle}
              disabled={buttonDisabled} 
            />
          </form>
        </div>
      </div>
    )
  }
};
