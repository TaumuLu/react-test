import { useTimeout, useUpdate } from 'ahooks'
import { Sprite as ISprite, Texture } from 'pixi.js'
import * as PIXI from 'pixi.js'
import { useRef, useState } from 'react'
import { Container, Sprite, Stage } from 'react-pixi-fiber'

const TestImg = () => {
  const scale = 0.5
  const [x, setX] = useState(0)
  const ref = useRef<ISprite>()
  const update = useUpdate()

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
      texture={Texture.from('test.jpg')}
    />
  )
}

export const TestPixi = () => {
  // const [app, setApp] = useState<any>()
  console.log(1111)

  return (
    <Stage
      // onMount={setApp}
      // onUnmount={() => {}}
      // renderOnComponentChange={false}
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
  )
}
