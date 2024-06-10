import { useTimeout, useUnmount } from 'ahooks'
import { useEffect, useState } from 'react'

const Child = () => {
  const [test] = useState()

  useEffect(() => {
    console.log(1111111)
    return () => {
      console.log(2222222)
    }
  }, [test])

  useUnmount(() => {
    console.log(333333)
  })

  return <div>111111</div>
}

export const Component = () => {
  const [isRender, setIsRender] = useState(true)

  useTimeout(() => {
    setIsRender(false)
  }, 2000)

  return <div>{isRender && <Child />}</div>
}
