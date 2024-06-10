import { observer } from 'mobx-react-lite'

import Bubble from '@/assets/bubble.svg'

import './nineSlice.scss'

export const Component = observer(() => {
  return (
    <div className='svg-nineSlice'>
      <div className='svg-nineSlice-icon'>{/* <Bubble /> */}</div>
      <div className='svg-nineSlice-clip'>
        <svg viewBox='0 0 21 19'>
          <use xlinkHref='#Web_Red_3' clipPath='url(#clip-top-left)' />
        </svg>
        <svg viewBox='0 0 21 19'>
          <use xlinkHref='#Web_Red_3' clip-path='url(#clip-top)' />
        </svg>

        <svg viewBox='0 0 21 19'>
          <use xlinkHref='#Web_Red_3' clip-path='url(#clip-top-right)' />
        </svg>

        <svg viewBox='0 0 21 19'>
          <use xlinkHref='#Web_Red_3' clip-path='url(#clip-left)' />
        </svg>

        <svg viewBox='0 0 21 19'>
          <use xlinkHref='#Web_Red_3' clip-path='url(#clip-center)' />
        </svg>

        <svg viewBox='0 0 21 19'>
          <use xlinkHref='#Web_Red_3' clip-path='url(#clip-right)' />
        </svg>

        <svg viewBox='0 0 21 19'>
          <use xlinkHref='#Web_Red_3' clip-path='url(#clip-bottom-left)' />
        </svg>

        <svg viewBox='0 0 21 19'>
          <use xlinkHref='#Web_Red_3' clip-path='url(#clip-bottom)' />
        </svg>

        <svg viewBox='0 0 21 19'>
          <use xlinkHref='#Web_Red_3' clip-path='url(#clip-bottom-right)' />
        </svg>
      </div>
    </div>
  )
})
