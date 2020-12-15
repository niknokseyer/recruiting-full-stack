import React, { Component } from 'react'

class Collapsible extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
    this.togglePanel = this.togglePanel.bind(this)
  }

  componentDidUpdate() {

  }

  togglePanel(e) {
    this.setState({ open: !this.state.open })
  }

  render() {
    return (
      <ul key={`node_${this.props.id}`} className="parent-node">
        <li onClick={e => this.togglePanel(e)} className="node">
          <img
            src={this.props.href}
            alt={this.props.description}
            title={this.props.description}
            height="45px;"
            className="node-image"
          />
          {' '}
          {this.props.name}
        </li>
        {this.state.open ? (
          this.props.child
        ) : null}
      </ul>
    )
  }
}


export default Collapsible
