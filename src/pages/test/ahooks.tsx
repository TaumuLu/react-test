import { useReactive } from 'ahooks'
import { useEffect } from 'react'

export const Component = () => {
  const state = useReactive({ x: 1, y: 1 })

  // 没用到 y 但是打印了2次，useReactive 并不能收集依赖
  console.log(1111, state.y)

  useEffect(() => {
    state.y = 2
  }, [])

  return <div>useReactive x: {state.x}</div>
}
