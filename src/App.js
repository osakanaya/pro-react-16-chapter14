import React, { Component } from 'react';
import { GeneralList } from "./GeneralList";
import { SortedList } from "./SortedList";
// import { ProFeature } from "./ProFeature";
import { ProController } from "./ProController";

// const ProList = ProFeature(SortedList);
const ProList = ProController(SortedList);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [ "Zoe", "Bob", "Alice", "Dora", "Joe" ],
      cities: [ "London", "New York", "Paris", "Milan", "Boston" ]
    };
  }

  toggleProMode = () => {
    this.setState({ proMode: !this.state.proMode });
  }
  render() {
    return <div className="container-fluid">
      <div className="row">
        <div className="col-3">
          <GeneralList list={ this.state.names } theme="primary" />
        </div>
        <div className="col-3">
          <ProList list={ this.state.names } />
        </div>
        <div className="col-3">
          <GeneralList list={ this.state.cities } theme="secondary" />
        </div>
        <div className="col-3">
          <ProList list={ this.state.cities } />
        </div>
      </div>
    </div>
  }
}

