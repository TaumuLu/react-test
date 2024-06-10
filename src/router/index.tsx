import { createBrowserRouter, RouteObject } from 'react-router-dom'

import { RouterPath } from '@/constant/router'

const Root = () => import('@/pages/root')
const Home = () => import('@/pages/home')

// test
const Ahooks = () => import('@/pages/test/ahooks')
const Mobx = () => import('@/pages/test/mobx')
const Render = () => import('@/pages/test/render')

// pixi
const PixiRoot = () => import('@/pages/pixi')
const PixiMask = () => import('@/pages/pixi/pixi-mask')
const PixiReact = () => import('@/pages/pixi/pixi-react')

// svg
const SvgNineSlice = () => import('@/pages/svg/nineSlice')

export const routerObjects: RouteObject[] = [
  {
    path: RouterPath.Root,
    lazy: Root,
    children: [
      {
        path: RouterPath.Home,
        index: true,
        lazy: Home,
      },
      {
        path: RouterPath.Mobx,
        lazy: Mobx,
      },
      {
        path: RouterPath.Ahooks,
        lazy: Ahooks,
      },
      {
        path: RouterPath.Render,
        lazy: Render,
      },
      // pixi
      {
        path: RouterPath.Pixi,
        lazy: PixiRoot,
        children: [
          {
            path: RouterPath.PixiMask,
            lazy: PixiMask,
          },
          {
            path: RouterPath.PixiReact,
            lazy: PixiReact,
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
]

export const router = createBrowserRouter(routerObjects)
