import { useState } from 'react'
import Home from '../src/components/home/Home.jsx'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import MainCalculator from './components/mainCalculator/MainCalculator.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/calculator' element={<MainCalculator />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
