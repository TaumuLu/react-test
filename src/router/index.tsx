import { ReactNode } from 'react'
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
const PixiShader = () => import('@/pages/pixi/shader')

// svg
const SvgNineSlice = () => import('@/pages/svg/nineSlice')

export type MenuRouterObject = RouteObject & {
  icon?: ReactNode
  children?: MenuRouterObject[]
}

export const routerObjects: MenuRouterObject[] = [
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
            path: RouterPath.PixiShader,
            lazy: PixiShader,
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
