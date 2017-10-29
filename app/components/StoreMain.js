import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'styles/styles';

import StoreNav from 'StoreNav';
import StoreBrowse from 'StoreBrowse';

export default class StoreMain extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="StoreMain wrapper">
        <StoreNav />
        <Route exact path="/store/shop" component={StoreBrowse} />
        <Route exact path="/store/lookbooks" component={Lookbooks} />
        <Route exact path="/store/press" component={Press} />
        <Route exact path="/store/faq" component={Faq} />
        <Route exact path="/store/contact" component={Contact} />
      </div>
    )
  }
}
const Lookbooks = () => (
  <div>
    Lookbooks
  </div>
)
const Press = () => (
  <div>
    Press
  </div>
)
const Faq = () => (
  <div>
    Faq
  </div>
)
const Contact = () => (
  <div>
    Contact
  </div>
)