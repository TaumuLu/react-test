import { Outlet } from 'react-router-dom'

import { RouterPath } from '../../constant/router'

import './index.scss'

export const Component = () => {
  console.log(11111)

  return (
    <div className='pixi-react-root'>
      <div className='router-list'>
        <a href={RouterPath.PixiMask}>PixiMask</a>
        <a href={RouterPath.PixiReact}>PixiReact</a>
      </div>
      <Outlet />
    </div>
  )
}
