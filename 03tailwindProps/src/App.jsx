import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0)
let myObj = {
  name:"Rohit Pahuja",
  age:"20"
}
  return (
    <>
    <Card channel="Chai aur codde" name="Rohit" btnTxt="Visit me"/>
    <Card channel="Chai aur codde" name="Pahuja" btnTxt="Try me"/>
    </>
  )
}

export default App
