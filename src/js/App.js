import React, { Fragment, useEffect, useState } from 'react'
import NodeTree from './NodeTree'

// NOTE: ESLint will enforce Táve coding standards:
// https://github.com/tave/javascript/  Goodbye semicolons!

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nodes: [],
      settings: [],
    }
  }

  componentDidMount() {
    fetch('http://localhost:8000/webservice.php')
      .then(response => response.json())
      .then((json) => {
        this.setState({ nodes: json.nodes })
        this.setState({ settings: json.settings })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  collapseNode(id) {
    const nodes = this.state.nodes.slice()
    const node = nodes[id]
    node.collapsed = !node.collapsed
    this.setState({ nodes: nodes })
  }

  render() {
    return (
      <NodeTree nodes={this.state.nodes} onClick={i => this.collapseNode(i)} />
    )
  }
}

export default App
