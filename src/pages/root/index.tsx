import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import viteLogo from '/vite.svg'
import reactLogo from '@/assets/react.svg'

import { RouterPath } from '../../constant'

import './index.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
      <div className='router-list'>
        <a href={RouterPath.Ahooks}>ahooks</a>
        <a href={RouterPath.Mobx}>mobx</a>
        <a href={RouterPath.Pixi}>pixi</a>
      </div>
      <Outlet />
    </>
  )
}

export default App
