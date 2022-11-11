import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {item: null};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    fetch(process.env.REACT_APP_API_URL + 'items/7')
      .then((response) => response.json())
      .then((data) => this.setState(() => ({item: "You have retrieved item # " + data.item_id})));
  }
  
  render () {
    return (
    <div className="App">
      <header className="App-header">
        <button onClick={this.handleClick}>Find Item using API</button>
        {this.state.item ? <p>{this.state.item}</p> : null}
      </header>
    </div>
  );}
}

export default App;
