import React, {useEffect, useState} from 'react'
import {Table, Modal, Input, Button} from 'antd'
import {connect} from 'react-redux'
import {requestUnsolved, resolveUnsolved} from "../../ducks/unsolved";

export default connect(state => ({unsolved: state.unsolved}), {request: requestUnsolved, resolve: resolveUnsolved})(
  ({unsolved, request, resolve}) => {
    const [visible, toggle] = useState(false)
    const [q, setQ] = useState('')
    const [appr, setAppr] = useState('')
    const columns = [
      {
        title: "Unsolved question",
        dataKey: 'title',
        key: "title",
        render: (_, record) => <span>{record.title}</span>
      },
      {
        title: "Action",
        render: (_, record) => {
          return (
            <Button
              onClick={() => {
                toggle(true)
                setQ(record.title)
              }}
            >Resolve</Button>
          )
        }
      }
    ]

    useEffect(() => {
      request()
    }, [])

    return (
      <div style={{width: "500px", margin: "0 auto"}}>
        <h1>Unsolved Questions of Users</h1>
        <Table columns={columns} dataSource={unsolved.list}/>
        <Modal
          visible={visible}
          title="Resolve question by typing appropriate answer"
        >
          <Input value={appr} onChange={e => setAppr(e.target.value)} />
          <Button onClick={() => {
            resolve(q, appr)
            setQ('')
            setAppr('')
            toggle(false)
          }}>Resolve the question</Button>
        </Modal>
      </div>
    )
  }
)