import { createBrowserRouter } from 'react-router-dom'

import { RouterPath } from '../constant'
import { TestAhooks } from '../pages/ahooks'
import { TestMobx } from '../pages/mobx'
import { PixiReact } from '../pages/pixi'
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
    Component: PixiReact,
  },
])
