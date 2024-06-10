import { Divider, List, Typography } from 'antd'
import { useState } from 'react'

import reactLogo from '@/assets/icons/react.svg?url'
import viteLogo from '@/assets/icons/vite.svg?url'

import './index.scss'

const data = [
  {
    title: 'ant-design',
    url: 'https://ant-design.antgroup.com/components/overview-cn',
  },
  {
    title: 'mobx',
    url: 'https://zh.mobx.js.org/README.html',
  },
  {
    title: 'pixi',
    url: 'https://pixijs.com/playground',
  },
  {
    title: 'pixi-react',
    url: 'https://pixijs.io/pixi-react',
  },
]

export const Component = () => {
  const [count, setCount] = useState(0)

  return (
    <div className='home-router'>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
      </div>
      <List
        header={<div>网站文档</div>}
        // footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <Typography.Text mark>[{item.title}]:</Typography.Text>
            <a href={item.url} target='_blank'>
              {item.url}
            </a>
          </List.Item>
        )}
      />
    </div>
  )
}
