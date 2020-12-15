import React, { Fragment, useEffect, useState } from 'react'
import NodeTree from './NodeTree'

// NOTE: ESLint will enforce Táve coding standards:
// https://github.com/tave/javascript/  Goodbye semicolons!

function App() {
  const [data, setData] = useState({
    nodes: [],
    settings: [],
  })
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch('http://localhost:8000/webservice.php')
      .then(response => response.json())
      .then((json) => {
        setData(json)
        setIsLoading(false)
      })
      .catch((err) => {
        setHasError(true)
        setIsLoading(false)
        console.log(err)
      })
  }, [])

  return (
    <Fragment>
      {hasError && <div>Error occurred.</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <NodeTree nodes={data.nodes} />
      )}
    </Fragment>
  )
}

export default App
