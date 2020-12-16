import React from 'react'
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
    this.setState({ nodes })

    fetch('http://localhost:8000/webservice.php', {
      method: 'POST',
      body: JSON.stringify(this.state),
    })
      .then(response => response.json())
      .then((json) => {
        //this.setState({ nodes: json.nodes })
        //this.setState({ settings: json.settings })
        console.log(json)
      })
      .catch((err) => {
        console.log(err)
      })

  }

  toggleDarkMode() {
    const settings = this.state.settings.slice()
    const setting = settings[0]
    setting.value = !setting.value
    this.setState({ settings })
    if (this.state.settings[0].value) {
      document.body.classList.add('dark')
    }
    else {
      document.body.classList.remove('dark')
    }
  }

  render() {
    const darkMode = this.state.settings.length > 0 ? this.state.settings[0].value : false
    return (
      <React.Fragment>
        <button onClick={() => this.toggleDarkMode()}>
          Dark Mode: {darkMode ? 'On' : 'Off'}
        </button>
        <NodeTree nodes={this.state.nodes} onClick={i => this.collapseNode(i)}/>
      </React.Fragment>
    )
  }
}

export default App
