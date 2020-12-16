import React from 'react'

class Node extends React.Component {
  render() {
    return (
      <ul key={`node_${this.props.node.id}`} className="parent-node">
        <li onClick={this.props.child.length > 0 ? this.props.onClick : null} className={this.props.child.length > 0 ? 'with-child-node node' : 'node'}>
          <img
            src={this.props.node.thumbnail.href}
            alt={this.props.node.thumbnail.description}
            title={this.props.node.thumbnail.description}
            height="45px;"
            className="node-image"
          />
          {' '}
          {this.props.node.name}
        </li>
        {this.props.node.collapsed ? (
          this.props.child
        ) : null}
      </ul>
    )
  }
}


export default Node
