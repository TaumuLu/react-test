import { Container, Sprite, Stage } from '@pixi/react'
import { useTimeout } from 'ahooks'
import { Sprite as ISprite } from 'pixi.js'
import { useRef, useState } from 'react'

const TestImg = () => {
  const scale = 0.5
  const [x, setX] = useState(0)
  const ref = useRef<ISprite>()

  useTimeout(() => {
    ref.current.scale.set(1)
  }, 1000)

  useTimeout(() => {
    setX(100)
  }, 2000)

  return (
    <Sprite
      x={x}
      ref={ref as any}
      scale={scale}
      width={200}
      height={200}
      image='test.jpg'
    />
  )
}

export const TestPixiReact = () => {
  return (
    <div>
      <div>@pixi/react</div>
      <Stage
        width={600}
        onUnmount={() => {}}
        renderOnComponentChange={false}
        options={{
          antialias: true,
          // resolution: 2,
          backgroundAlpha: 0,
          powerPreference: 'high-performance',
          autoStart: true,
          autoDensity: true,
        }}
      >
        <Container>
          <TestImg />
        </Container>
      </Stage>
    </div>
  )
}
