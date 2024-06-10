import { AppstoreOutlined } from '@ant-design/icons'
import { Layout, Menu, MenuProps } from 'antd'
import { observer } from 'mobx-react-lite'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import { RouterPath } from '../../constant/router'

import './index.scss'

const { Sider } = Layout

type MenuItems = Required<MenuProps>['items']

const items: MenuItems = [
  {
    key: RouterPath.Home,
    label: 'React Test',
    icon: <AppstoreOutlined />,
    children: [
      {
        key: RouterPath.Root,
        label: 'home',
      },
      {
        key: RouterPath.Ahooks,
        label: 'ahooks',
      },
      {
        key: RouterPath.Mobx,
        label: 'mobx',
      },
      {
        key: RouterPath.Render,
        label: 'render',
      },
    ],
  },
  {
    key: RouterPath.Pixi,
    label: 'Pixi Test',
    icon: <AppstoreOutlined />,
    children: [
      {
        key: RouterPath.PixiMask,
        label: 'PixiMask',
      },
      {
        key: RouterPath.PixiReact,
        label: 'PixiReact',
      },
    ],
  },
  {
    key: RouterPath.Svg,
    label: 'Svg Test',
    icon: <AppstoreOutlined />,
    children: [
      {
        key: RouterPath.SvgNineSlice,
        label: 'SvgNineSlice',
      },
    ],
  },
]

export const Component = observer(() => {
  const navigate = useNavigate()
  const location = useLocation()
  const { pathname } = location

  return (
    <Layout className='root-router'>
      <Sider width='25%'>
        <Menu
          onClick={e => {
            navigate(e.key)
          }}
          selectedKeys={[pathname]}
          defaultOpenKeys={items.map(item => item.key) as any}
          mode='inline'
          items={items}
        />
      </Sider>
      <Layout>
        <Outlet />
      </Layout>
    </Layout>
  )
})
