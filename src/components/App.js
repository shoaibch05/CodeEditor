import React, { useState, useEffect } from 'react'
import Editor from './Editor'

function App() {
  const [html, setHtml] = useState('')
  const [css, setcss] = useState('')
  const [js, setjs] = useState('')
  const [srcDoc, setsrcdoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setsrcdoc(
        `<html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      
        </html>`
      )

    }, 250)
    return () => clearTimeout(timeout)

  }, [html, css, js])
  return (
    <>
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
          
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setcss}
          
        />
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setjs}
          
        />

      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  )
}

export default App;
