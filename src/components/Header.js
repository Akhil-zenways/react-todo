import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <div className='header'>
          <h1>Todoey!</h1>
          <button type="button" className='clear-all' onClick={() => this.props.deleteAll()}>Clear all</button>
      </div>
    )
  }
}

export default Header