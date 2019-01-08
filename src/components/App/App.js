import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getHousesThunk } from '../../thunks/getHouses';
import { connect } from 'react-redux'
import Card from './Card'

export class App extends Component {

  async componentDidMount() {
    await this.props.getHouses()
  }

  render() {
    const { houses, isLoading } = this.props
    if (isLoading) {
      return <img src='./assets/wolf.gif'/>
    }
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className='Display-info'>
        {
          houses.map(house => {
            return <Card house={house} />
          })
        }
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  houses: state.houses,
  isLoading: state.isLoading
}) 

export const mapDispatchToProps = (dispatch) => ({
  getHouses: () => dispatch(getHousesThunk())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
