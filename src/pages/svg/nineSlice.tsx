import { observer } from 'mobx-react-lite'

import Bubble from '@/assets/icons/bubble.svg'
import { SvgIcon } from '@/components'

import './nineSlice.scss'

export const Component = observer(() => {
  return (
    <div className='svg-nineSlice'>
      <div className='svg-nineSlice-icon'>
        <Bubble />
        <SvgIcon icon='bubble' />

        <svg id='clip-bubble' width='63' height='57' viewBox='0 0 63 57'>
          <use href='#icon-bubble' />

          <clipPath id='11'>
            <rect x='0' y='0' width='14' height='14' />
          </clipPath>
          <clipPath id='12'>
            <rect x='14' y='0' width='10' height='14' />
          </clipPath>
          <clipPath id='clip-top-right'>
            <rect x='42' y='0' width='21' height='19' />
          </clipPath>
          <clipPath id='clip-left'>
            <rect x='0' y='19' width='21' height='19' />
          </clipPath>
          <clipPath id='clip-center'>
            <rect x='21' y='19' width='21' height='19' />
          </clipPath>
          <clipPath id='clip-right'>
            <rect x='42' y='19' width='21' height='19' />
          </clipPath>
          <clipPath id='clip-bottom-left'>
            <rect x='0' y='38' width='21' height='19' />
          </clipPath>
          <clipPath id='clip-bottom'>
            <rect x='21' y='38' width='21' height='19' />
          </clipPath>
          <clipPath id='clip-bottom-right'>
            <rect x='42' y='38' width='21' height='19' />
          </clipPath>
        </svg>
      </div>
      <div className='svg-nineSlice-clip'>
        <svg viewBox='0 0 14 14'>
          <use xlinkHref='#clip-bubble' clipPath='url(#11)' />
        </svg>

        <svg viewBox='14 0 10 14'>
          <use xlinkHref='#clip-bubble' clip-path='url(#12)' />
        </svg>

        <svg viewBox='0 0 21 19'>
          <use xlinkHref='#clip-bubble' clip-path='url(#clip-top-right)' />
        </svg>

        <svg viewBox='0 0 21 19'>
          <use xlinkHref='#clip-bubble' clip-path='url(#clip-left)' />
        </svg>

        <svg viewBox='0 0 21 19'>
          <use xlinkHref='#clip-bubble' clip-path='url(#clip-center)' />
        </svg>

        <svg viewBox='0 0 21 19'>
          <use xlinkHref='#clip-bubble' clip-path='url(#clip-right)' />
        </svg>

        <svg viewBox='0 0 21 19'>
          <use xlinkHref='#clip-bubble' clip-path='url(#clip-bottom-left)' />
        </svg>

        <svg viewBox='0 0 21 19'>
          <use xlinkHref='#clip-bubble' clip-path='url(#clip-bottom)' />
        </svg>

        <svg viewBox='0 0 21 19'>
          <use xlinkHref='#clip-bubble' clip-path='url(#clip-bottom-right)' />
        </svg>
      </div>
    </div>
  )
})
