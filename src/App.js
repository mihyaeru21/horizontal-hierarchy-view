// @flow

import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="hv-wrapper">
          <div className="hv-item">
            <div className="hv-item-parent">
              <p className="simple-card"> Parent </p>
            </div>
            <div className="hv-item-children">
              <div className="hv-item-child">
                <div className="hv-item">
                  <div className="hv-item-parent">
                    <p className="simple-card"> Parent </p>
                  </div>

                  <div className="hv-item-children">
                    <div className="hv-item-child">
                      <p className="simple-card"> Child 1 </p>
                    </div>

                    <div className="hv-item-child">
                      <p className="simple-card"> Child 2 </p>
                    </div>

                    <div className="hv-item-child">
                      <p className="simple-card"> Child 2 </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hv-item-child">
                <p className="simple-card"> Child 2 </p>
              </div>
              <div className="hv-item-child">
                <p className="simple-card"> Child 3 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
