import React, { Component } from 'react';
import { GeneralList } from "./GeneralList";
import { SortedList } from "./SortedList";
import { ProFeature } from "./ProFeature";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [ "Zoe", "Bob", "Alice", "Dora", "Joe" ],
      cities: [ "London", "New York", "Paris", "Milan", "Boston" ],
      proMode: false
    };
  }

  toggleProMode = () => {
    this.setState({ proMode: !this.state.proMode });
  }
  render() {
    return <div className="container-fluid">
      <div className="row">
        <div className="col-12 text-center p-2">
          <div className="form-check">
            <input type="checkbox" className="form-check-input" value={ this.state.proMode } onChange={ this.toggleProMode } />
            <label className="form-check-label">Pro Mode</label>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <GeneralList list={ this.state.names } theme="primary" />
        </div>
        <div className="col-6">
          <ProFeature pro={ this.state.proMode } render={ () => <SortedList list={ this.state.names } /> } />
        </div>
      </div>
    </div>
  }
}

