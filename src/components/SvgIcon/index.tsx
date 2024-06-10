import classnames from 'classnames'

import { isExternal } from '@/utils/url'

import './index.scss'

export interface SvgIconProps {
  icon: string
  className?: string
}

export const SvgIcon = (props: SvgIconProps) => {
  const { icon, className } = props
  const classNames = classnames('icon', 'svg-icon', `svg-${icon}`, className)

  if (isExternal(icon)) {
    return (
      <div
        style={{
          mask: `url(${icon}) center center no-repeat`,
        }}
        className={classNames}
      />
    )
  }

  const iconName = `#icon-${icon}`
  return (
    <svg className={classNames} aria-hidden='true'>
      <use xlinkHref={iconName} />
    </svg>
  )
}

export default SvgIcon
