import { createBrowserRouter } from 'react-router-dom'

import App from './App'
import { TestAhooks } from './pages/ahooks'
import { TestMobx } from './pages/mobx'
import { TestPixi } from './pages/pixi'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        path: 'mobx',
        Component: TestMobx,
      },
      {
        path: 'ahooks',
        Component: TestAhooks,
      },
    ],
  },
  {
    path: 'pixi',
    Component: TestPixi,
  },
])
