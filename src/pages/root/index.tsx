import { CloseOutlined, PlusOutlined } from '@ant-design/icons'
import { FloatButton, Layout, Menu } from 'antd'
import classNames from 'classnames'
import { observer } from 'mobx-react-lite'
import { useEffect, useMemo, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import { RouterPath } from '../../constant/router'
import { createMenuItemConfig } from './menuItems'

import './index.scss'

const { Sider } = Layout

export const Component = observer(() => {
  const navigate = useNavigate()
  const location = useLocation()
  const { pathname } = location
  const [isOpen, setIsOpen] = useState(true)

  const isRoot = pathname === RouterPath.Root
  useEffect(() => {
    if (isRoot) {
      navigate(RouterPath.Home, { replace: true })
    }
  }, [isRoot])

  const menuConfig = useMemo(createMenuItemConfig, [])

  return (
    <Layout className='root-router'>
      <Sider width={isOpen ? '20%' : 0} className={classNames({ isOpen })}>
        <Menu
          onClick={e => {
            navigate(e.key)
          }}
          selectedKeys={[pathname]}
          mode='inline'
          {...menuConfig}
        />
        <FloatButton
          icon={isOpen ? <CloseOutlined /> : <PlusOutlined />}
          onClick={() => {
            setIsOpen(!isOpen)
          }}
        />
      </Sider>
      <Layout>
        <Outlet />
      </Layout>
    </Layout>
  )
})
