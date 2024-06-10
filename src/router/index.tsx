import { createBrowserRouter } from 'react-router-dom'

import { RouterPath } from '../constant/router'
import { PixiRoot } from '../pages/pixi'
import { PixiMask } from '../pages/pixi/pixi-mask'
import { PixiReact } from '../pages/pixi/pixi-react'
import { TestAhooks } from '../pages/react/ahooks'
import { TestMobx } from '../pages/react/mobx'
import { TestRender } from '../pages/react/render'

const Root = () => import('@/pages/root')
const Home = () => import('@/pages/home')
const SvgNineSlice = () => import('@/pages/svg/nineSlice')

export const router = createBrowserRouter([
  {
    path: RouterPath.Root,
    lazy: Root,
    children: [
      {
        // path: RouterPath.Home,
        index: true,
        lazy: Home,
      },
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
      // pixi
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
      // svg
      {
        path: RouterPath.Svg,
        children: [
          {
            path: RouterPath.SvgNineSlice,
            lazy: SvgNineSlice,
          },
        ],
      },
    ],
  },
])
