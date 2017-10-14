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
      buttonDisabled: true,
      inputDisabled: false,
    }
  }
  _handleChange(e) {
    if (/(^\w.*@\w+\.\w)/g.test(e.target.value)) {
      console.log('%cValid email!', 'font-size: 16px; color: black; font-weight: bold')
      this.setState({buttonDisabled: false});
    } else {
      console.log('%cKeep going...', 'font-size: 16px; color: red; font-weight: bold')
      this.setState({buttonDisabled: true});
    }
  }
  _handleSubmit(e) {
    e.preventDefault();
    this.emailAddress.style.background = 'green';
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
    this.emailForm.reset();
  }
  render() {
    const { videoURL, placeholder, buttonDisabled, inputDisabled } = this.state;
    let emailToggle = buttonDisabled ? 'Main__email Main__email--full' : 'Main__email';
    let buttonToggle = buttonDisabled ? 'Main__button Main__button--disabled' : 'Main__button';
    return(
      <div className='Main'>
        <div className='Main__video-container'>
          <video className='Main__video' muted autoPlay loop>
            <source src={videoURL} type='video/mp4'></source>
          </video>
        </div>
        <div className='Main__mask'></div>
        <div className='Main__container'>
          <div className='Main__content'>
            <img className='Main__logo' src={logo} />
            <form 
              className='Main__email-form' 
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
      </div>
    )
  }
};
