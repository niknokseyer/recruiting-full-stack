import React, { Component } from 'react'

import Collapsible from './Collapsible'

class NodeTree extends Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate() {

  }

  getCurrent = node => this.props.nodes.filter(cNode => cNode.parent === node)
    .map(cNode => (
      <Collapsible
        id={cNode.id}
        name={cNode.name}
        href={cNode.thumbnail.href}
        description={cNode.thumbnail.description}
        child={this.getCurrent(cNode.id)}
      />
    ))

  render() {
    return (
      <div>
        {this.getCurrent(null)}
      </div>
    )
  }
}


export default NodeTree
