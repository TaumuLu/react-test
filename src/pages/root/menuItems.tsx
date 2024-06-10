import {
  AimOutlined,
  ApartmentOutlined,
  AppstoreOutlined,
  BlockOutlined,
  BugOutlined,
  BulbOutlined,
  CopyrightOutlined,
  DatabaseOutlined,
} from '@ant-design/icons'
import { MenuProps } from 'antd'
import { ReactNode } from 'react'
import { RouteObject } from 'react-router-dom'

import { RouterPath } from '../../constant/router'
import { routerObjects } from '../../router'
import { getEnumKeyByValue } from '../../utils'

import './index.scss'

type MenuItem = Required<MenuProps>['items'][number]

type MenuItems = MenuItem[]

type NewRouterObject = RouteObject & { icon?: ReactNode }

const createMenuItems = (
  routers: RouteObject[],
  fn?: (router: RouteObject) => void | NewRouterObject,
): MenuItems => {
  return routers.map(router => {
    const newRouter = (fn?.(router) || router) as NewRouterObject
    return {
      key: newRouter.path,
      label: getEnumKeyByValue(RouterPath, newRouter.path),
      icon: newRouter.icon,
      children: newRouter.children
        ? createMenuItems(newRouter.children, fn)
        : undefined,
    }
  })
}

export const createMenuItemConfig = () => {
  const icons = [
    <AppstoreOutlined />,
    <AimOutlined />,
    <ApartmentOutlined />,
    <BlockOutlined />,
    <BugOutlined />,
    <BulbOutlined />,
    <CopyrightOutlined />,
    <DatabaseOutlined />,
  ]

  const defaultOpenKeys: string[] = []
  const items = createMenuItems(routerObjects, router => {
    if (router.children) {
      defaultOpenKeys.push(router.path)
      return {
        ...router,
        icon: icons.shift(),
      }
    }
  })

  return {
    defaultOpenKeys,
    items,
  }
}

// [
//   {
//     key: RouterPath.Home,
//     label: 'React Test',
//     icon: <AppstoreOutlined />,
//     children: [
//       {
//         key: RouterPath.Root,
//         label: 'home',
//       },
//       {
//         key: RouterPath.Ahooks,
//         label: 'ahooks',
//       },
//       {
//         key: RouterPath.Mobx,
//         label: 'mobx',
//       },
//       {
//         key: RouterPath.Render,
//         label: 'render',
//       },
//     ],
//   },
//   {
//     key: RouterPath.Pixi,
//     label: 'Pixi Test',
//     icon: <AimOutlined />,
//     children: [
//       {
//         key: RouterPath.PixiMask,
//         label: 'PixiMask',
//       },
//       {
//         key: RouterPath.PixiReact,
//         label: 'PixiReact',
//       },
//     ],
//   },
//   {
//     key: RouterPath.Svg,
//     label: 'Svg Test',
//     icon: <ApartmentOutlined />,
//     children: [
//       {
//         key: RouterPath.SvgNineSlice,
//         label: 'SvgNineSlice',
//       },
//     ],
//   },
// ]
