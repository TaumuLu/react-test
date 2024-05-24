import { useApp } from '@pixi/react'
import { Application, Text } from 'pixi.js'
import { useEffect } from 'react'

export const addFpsTimer = (app: Application) => {
  const fps = app.ticker?.FPS.toFixed(0)
  const fpsText = new Text(`FPS: ${fps}`, {
    fontFamily: 'Arial',
    fontSize: 24,
    fill: 0x3ea874,
  })
  fpsText.x = 0
  fpsText.y = 0

  app.stage.addChild(fpsText)
  return setInterval(() => {
    fpsText.text = `FPS: ${app?.ticker?.FPS.toFixed(0)}`
  }, 1000)
}

export const FpsTimer = (): any => {
  const pixiApp = useApp()

  useEffect(() => {
    if (!pixiApp || !pixiApp.ticker || !pixiApp.stage) return

    const intervalFps = addFpsTimer(pixiApp as unknown as any)
    return () => {
      intervalFps && clearInterval(intervalFps)
    }
  }, [pixiApp])
  return null
}

export default FpsTimer
