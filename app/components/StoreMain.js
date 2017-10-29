import React, { Component } from 'react';
import 'styles/styles';

import StoreNav from 'StoreNav';
import StoreBrowse from 'StoreBrowse';

export default class StoreMain extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="StoreMain">
        <StoreNav />
        <StoreBrowse />
      </div>
    )
  }
}