import { useState } from 'react'
import { LoginBox } from './components/LoginBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <LoginBox/>
  )
}

export default App
