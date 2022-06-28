import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [],
    eaten: [],
    page: 0
  }

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(json => {
        this.setState({ sushi: json })
      })
  }

  handleSushiClick = (id, eaten) => {
    if (eaten) return

    const eatenSushi = this.state.sushi.find( sushi => sushi.id === id )
    if ( (this.remainingFunds() - eatenSushi.price) < 0 ) return
    
    this.setState( prevState => {
      return { eaten: [...prevState.eaten, eatenSushi] }
    })
  }

  handlePageClick = () => {
    this.setState( prevState => {
      let page = prevState.page !== 24 ? (prevState.page + 1) : 0
      return { page: page }
    } )
  }

  segmentSushi = () => {
    const page = this.state.page
    const start = page * 4
    return this.state.sushi.slice( start, start + 4 )
  }

  remainingFunds = () => {
    return this.state.eaten.reduce( ( total, currentSushi ) =>  total - currentSushi.price, 100)
  }

  render() {
    return (
      <div className="app">
        <SushiContainer 
          sushi={ this.segmentSushi() } 
          eatenSushi={ this.state.eaten } 
          handleSushiClick={ this.handleSushiClick } 
          handlePageClick={ this.handlePageClick }
        />
        <Table eaten={ this.state.eaten } funds={ this.remainingFunds() } />
      </div>
    );
  }
}

export default App;