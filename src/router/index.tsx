import { createBrowserRouter } from 'react-router-dom'

import { RouterPath } from '../constant'
import { TestAhooks } from '../pages/ahooks'
import { TestMobx } from '../pages/mobx'
import { PixiRoot } from '../pages/pixi'
import { PixiMask } from '../pages/pixi/pixi-mask'
import { PixiReact } from '../pages/pixi/pixi-react'
import { TestRender } from '../pages/render'
import Root from '../pages/root'

export const router = createBrowserRouter([
  {
    path: RouterPath.Root,
    Component: Root,
    children: [
      {
        path: RouterPath.Mobx,
        Component: TestMobx,
      },
      {
        path: RouterPath.Ahooks,
        Component: TestAhooks,
      },
      {
        path: 'render',
        Component: TestRender,
      },
    ],
  },
  {
    path: RouterPath.Pixi,
    Component: PixiRoot,
    children: [
      {
        path: RouterPath.PixiMask,
        Component: PixiMask,
      },
      {
        path: RouterPath.PixiReact,
        Component: PixiReact,
      },
    ],
  },
])
