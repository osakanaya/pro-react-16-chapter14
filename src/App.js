import React, { Component } from 'react';
import { GeneralList } from "./GeneralList";
import { SortedList } from "./SortedList";
import { ProModeContext } from "./ProModeContext";
import { ProModeToggle } from "./ProModeToggle";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [ "Zoe", "Bob", "Alice", "Dora", "Joe" ],
      cities: [ "London", "New York", "Paris", "Milan", "Boston" ],
      proContextData: {
        proMode: false,
        toggleProMode: this.toggleProMode
      }
    };
  }

  toggleProMode = () => {
    if (this.state.proContextData.proMode) {
      this.setState(state => state.proContextData.proMode = false);
    } else {
      this.setState(state => state.proContextData.proMode = true);
    }
  }

  render() {
    return <div className="container-fluid">
      <ProModeContext.Provider value={ this.state.proContextData }>
        <div className="row">
          <div className="col-12 text-center p-2">
            <ProModeToggle label="Pro Mode" />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <GeneralList list={ this.state.names } theme="primary" />
          </div>
          <div className="col-6">
              <SortedList list={ this.state.names } />
          </div>
        </div>
      </ProModeContext.Provider>
    </div>
  }
}

