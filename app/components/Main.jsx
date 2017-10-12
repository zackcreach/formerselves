import React, {Component} from 'react';
import 'styles/styles';
import logo from 'images/fs-logo';

export default class Main extends Component {
  constructor() {
    super();
    
    this.state = {
      videoURL: 'https://player.vimeo.com/external/158148793.hd.mp4?s=8e8741dbee251d5c35a759718d4b0976fbf38b6f&profile_id=119&oauth2_token_id=57447761',
      emailAddress: '',
      placeholder: 'Email Address'
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      emailAddress: this.emailAddress.value,
      placeholder: 'Submitted'
    });
    this.emailForm.reset();
  }
  render() {
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
            {/* <svg><use xlinkHref={logo}></use></svg> */}
            <img className='Main__logo' src={logo} />
            <form className='Main__email-form' ref={(input) => {this.emailForm = input}} onSubmit={(e) => this.handleSubmit(e)}>
              <input className='Main__email' ref={(input) => {this.emailAddress = input}} placeholder={this.state.placeholder} />
              <input className='Main__button' type='submit'/>
            </form>
          </div>
        </div>
      </div>
    )
  }
};
