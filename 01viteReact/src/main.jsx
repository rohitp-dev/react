import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElement = React.createElement('a', {
  href: 'https://www.fb.com',
  target: '_blank',
}, 'Click me to visit Goooooooogle')

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)
