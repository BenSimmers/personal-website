import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />

    {/* make a button which goes back to the top */}
    <button
    className="back-button"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M16 14L6 24l1.4 1.4l8.6-8.6l8.6 8.6L26 24zM4 8h24v2H4z"/></svg>
    </button>



  </React.StrictMode>
)
