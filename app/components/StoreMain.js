import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'styles/styles';

import StoreNav from 'StoreNav';
import StoreBrowse from 'StoreBrowse';

export default class StoreMain extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    console.log(window);
  }
  render() {
    return (
      <div className="StoreMain wrapper">
        <StoreNav />
        <Route path="/store" exact component={StoreBrowse} />
        <Route path="/store/shop" component={StoreBrowse} />
        <Route path="/store/lookbooks" component={Lookbooks} />
        <Route path="/store/press" component={Press} />
        <Route path="/store/faq" component={Faq} />
        <Route path="/store/contact" component={Contact} />
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