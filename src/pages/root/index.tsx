import { Layout, Menu } from 'antd'
import { observer } from 'mobx-react-lite'
import { useEffect, useMemo } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import { RouterPath } from '../../constant/router'
import { createMenuItemConfig } from './menuItems'

import './index.scss'

const { Sider } = Layout

export const Component = observer(() => {
  const navigate = useNavigate()
  const location = useLocation()
  const { pathname } = location

  const isRoot = pathname === RouterPath.Root
  useEffect(() => {
    if (isRoot) {
      navigate(RouterPath.Home, { replace: true })
    }
  }, [isRoot])

  const menuConfig = useMemo(createMenuItemConfig, [])

  return (
    <Layout className='root-router'>
      <Sider width='20%'>
        <Menu
          onClick={e => {
            navigate(e.key)
          }}
          selectedKeys={[pathname]}
          mode='inline'
          {...menuConfig}
        />
      </Sider>
      <Layout>
        <Outlet />
      </Layout>
    </Layout>
  )
})
