import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {Input, Button} from 'antd'
import "./index.scss"
import {sendMessage, pushMessage} from "../../../../ducks/faqWidget";

export default connect(state => ({ faq: state.faq }), { push: pushMessage, send: sendMessage })
(({ faq, send, push }) => {
  const [message, setMessage] = useState('')
  useEffect(() => {
    setTimeout(() => {
      push("How can I help you? Use Ctrl+J to search for a definition or type any question")
    }, 500)
  }, [])
  return (
    <div className="chat">
      <div className="chat__container" style={{ background: "#fff" }}>
        <div className="chat__container__header">
          Cool Chatbot
        </div>
        <div className="chat__container__messages">
          {
            faq.list && faq.list.length > 0 && (
              faq.list.map(item => (
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