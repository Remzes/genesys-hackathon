import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {Input, Button} from 'antd'
import "./index.scss"
import {sendMessage, pushMessage} from "../../../ducks/applicationWidget";
import qs from "query-string";

export default connect(state => ({ aw: state.aw }), { push: pushMessage, send: sendMessage })
(({ aw, send, push }) => {
  const [message, setMessage] = useState('')
  useEffect(() => {
    setTimeout(() => {
      push("How can I help you?")
    }, 500)
  }, [])
  return (
    <div className="chat">
      <div className="chat__container">
        <div className="chat__container__header">
          Cool Chatbot
        </div>
        <div className="chat__container__messages">
          {
            aw.list && aw.list.length > 0 && (
              aw.list.map(item => (
                <div key={item} className="chat__container__messages__message">
                  <span>{item}</span>
                </div>
              ))
            )
          }
        </div>
        <div className="chat__container__type">
          <Input className="input" onChange={e => setMessage(e.target.value)} value={message}/>
          <Button onClick={e => {
            e.preventDefault()
            if (message) {
              send(message)
            }
            setMessage('')
          }} className="button" type="primary" icon="double-right"/>
        </div>
      </div>
    </div>
  )
})