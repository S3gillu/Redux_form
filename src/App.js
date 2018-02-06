import React, { Component } from 'react';

import './App.css';
import FormCode from './FormCode';

class App extends Component {
  submit = (values) => {
    alert("submitted");
    console.log(values);
  }
  render() {
    return (
      <div className="container">
        <h3 className="jumbotron">Redux Form Validation</h3>
        <FormCode onSubmit={this.submit} />
      </div>
    );
  }
}

export default App;
