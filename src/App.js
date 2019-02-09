import React, { Component } from 'react';
import './css/app.css';
import Form from './components/Form'
import Result from "./components/Result"




class App extends Component {

  state = {
    img: "",
    longtidue: "",
    latidue: '',
    zoom: '0.05'
  }

  handleLongChange = b => {
    this.setState({
      longtidue: b.target.value

    })
  }

  handleLatChange = e => {
    this.setState({
      latidue: e.target.value

    })
  }

  handleZoomChange = c => {
    this.setState({
      zoom: c.target.value

    })
  }


  handleCitySubmit = e => {
    e.preventDefault()
    const API =
      `https://api.nasa.gov/planetary/earth/imagery?lon=${this.state.longtidue}&lat=${this.state.latidue}&date=2014-02-01&dim=${this.state.zoom}&cloud_score=False&api_key=WQxBX0ItbyXDx9z7gLQQXaiFniJgNrQ1h6aMmvtK`;

    fetch(API)
      .then(response => response.json())
      .then(response => {
        this.setState({
          img: response.url,
        })

      })
      .catch(err => console.log(err))

  }

  render() {
    return (
      <React.Fragment>
        <Form
          submit={this.handleCitySubmit}
          long={this.handleLongChange}
          lat={this.handleLatChange}
          zoom={this.handleZoomChange}
        />

        <Result info={this.state} />



      </React.Fragment>
    )

  }
}

export default App;
