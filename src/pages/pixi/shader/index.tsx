import { Container, Sprite, Stage, Text } from '@pixi/react'
import { TextStyle } from '@pixi/text'
import { useTimeout } from 'ahooks'
import * as PIXI from 'pixi.js'
import { Container as IContainer, Sprite as ISprite } from 'pixi.js'
import { useEffect, useRef, useState } from 'react'

import testJpg from '@/assets/test.jpg'

import { FpsTimer } from '../components/PixiFps'

const TestImg = () => {
  const scale = 0.5
  // const [x, setX] = useState(0)
  const ref = useRef<IContainer>()

  // useTimeout(() => {
  //   ref.current.scale.set(1)
  // }, 1000)

  // useTimeout(() => {
  //   setX(100)
  // }, 2000)

  useEffect(() => {
    const sprite = PIXI.Sprite.from(testJpg)
    sprite.anchor.set(0.5)
    sprite.position.set(400, 400)

    const vertex = `
attribute vec2 aVertexPosition;
uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;
varying vec2 vVertexPosition;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition(void)
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord(void)
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
    vVertexPosition = aVertexPosition;
}
`

    // Fragment shader, in real use this would be much cleaner when loaded from a file
    // or embedded into the application as data resource.
    const fragment = `
uniform sampler2D uSampler;
varying vec2 vTextureCoord;
varying vec2 vVertexPosition;

void main() {
    // 计算像素点与圆心的距离
    float distance = length(vVertexPosition - vec2(0.5));

    // 如果距离大于圆的半径，则丢弃该像素
    if (distance > 0.5) {
        discard;
    }

    // 输出纹理颜色
    gl_FragColor = texture2D(uSampler, vTextureCoord);
}
`

    const container = ref.current
    const bounds = container.getBounds()
    const centerX = bounds.width / 2
    const centerY = bounds.height / 2
    const center = {
      x: (0.5 * sprite.width) / sprite.texture.width,
      y: (0.5 * sprite.height) / sprite.texture.height,
    }
    // const center = [centerX + bounds.x, centerY + bounds.y]
    const radius = Math.min(centerX, centerY)
    // 创建一个自定义着色器
    // const center = {
    //   x: bounds.x + container.width / 2,
    //   y: bounds.y + container.height / 2,
    // }
    // console.log(1111, container.anchor.x, bounds)
    const shader = new PIXI.Filter(vertex, fragment, {
      // center: [center.x, center.y],
      // radius,
      // startAngle: 20,
      // endAngle: Math.PI * 2,
      angle: Math.PI / 2,
    })
    // 将着色器应用到精灵对象上
    ref.current.filters = [shader]
    ref.current.addChild(sprite)
  })

  return (
    <Container ref={ref as any}>
      {/* <Sprite
        ref={ref as any}
        // scale={scale}
        x={400}
        y={400}
        // width={200}
        // height={200}
        image='test.jpg'
        anchor={0.5}
      /> */}
      {/* <Text
        text={x.toString()}
        style={
          new TextStyle({
            align: 'center',
            fontSize: 24,
            fill: '#ffffff',
          })
        }
      /> */}
    </Container>
  )
}

export const Component = () => {
  return (
    <div>
      <div>@pixi/react</div>
      <Stage
        width={800}
        height={1000}
        onMount={app => {
          window.__PIXI_APP__ = app as any
        }}
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
          {/* <FpsTimer /> */}
          <TestImg />
        </Container>
      </Stage>
    </div>
  )
}
