import { Outlet } from 'react-router-dom'

import { RouterPath } from '../../constant/router'

import './index.scss'

export const Component = () => {
  return (
    <div className='pixi-react-root'>
      <div className='router-list'>
        <a href={RouterPath.PixiMask}>PixiMask</a>
        <a href={RouterPath.PixiShader}>PixiShader</a>
      </div>
      <Outlet />
    </div>
  )
}
