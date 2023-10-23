import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from '@/routes'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/style.css'
import '@/styles/templates/ace-responsive-menu.css'
import '@/styles/templates/jquery-ui.min.css'
import '@/styles/templates/menu.css'
import '@/styles/templates/ud-custom-spacing.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
)
