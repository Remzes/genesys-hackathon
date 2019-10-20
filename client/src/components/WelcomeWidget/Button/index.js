import React, {useEffect} from 'react'
import {Icon} from 'antd'
import {SERVER} from '../../../config'
import "./index.scss"

export default () => {
  return (
    <div className="widget">
      <div className="widget__wrapper">
        <Icon type="message" />
      </div>
    </div>
  )
}