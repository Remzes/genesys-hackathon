import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {Input, Button} from 'antd'
import "./index.scss"
import {sendMessage, pushMessage} from "../../../ducks/welcomeWidget";
import qs from "query-string";

export default connect(state => ({ ww: state.ww }), { push: pushMessage, send: sendMessage })
(({ ww, send, push }) => {
  const [message, setMessage] = useState('')
  useEffect(() => {
    setTimeout(() => {
      const searchQuery = qs.parse(window.location.search)
      if (searchQuery.firstName && searchQuery.lastName) {
        const {firstName, lastName, businessName} = searchQuery
        push(`Hello, ${firstName} ${lastName}. Nice to meet you here from ${businessName}`)
      } else {
        push("Hello! Nice to meet you!")
      }
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
            ww.list && ww.list.length > 0 && (
              ww.list.map(item => (
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