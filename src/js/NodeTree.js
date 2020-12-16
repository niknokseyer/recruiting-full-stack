import React from 'react'

import Node from './Node'

class NodeTree extends React.Component {
  getCurrent = node => this.props.nodes.filter(cNode => cNode.parent === node)
    .map(cNode => (
      <Node node={cNode}
        onClick={() => this.props.onClick(cNode.id)}
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
