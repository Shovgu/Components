import React from 'react'
import ReactDOM from 'react-dom/client'
import Wine from './components/wine/Wine'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Wine title="Merlot" description="France,$144.000 USD" rating="9.5"/>
  </>
)
