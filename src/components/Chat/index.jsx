import React, { useState } from 'react'
import { useParams } from "react-router-dom"
import { Message } from "../Message"

import { MdSend } from "react-icons/md"
import styles from './styles.module.css'

export const Chat = () => {
  const [messages, setMessages] = useState([])
  const { id } = useParams()

  const handleSubmit = (e) => {
    e.preventDefault()
    const value = e.target.myMessage.value
    const hour = `${new Date().getHours()}:${new Date().getMinutes()}`
    

    setMessages([...messages, {text: value, hour}])
  }

  return (
    <div className={styles.chat}> 
      <header className={styles.header}>
        <p>
          Chat with id:  {id}
        </p>
      </header>
      <ol className={styles.messages}> 
      {messages.length === 0 ? 
      <>
        <Message text="Hello" hour="10:00" sender={true} />
        <Message text="Hello world" hour="10:09" sender={false} />
      </>

      : messages.map((message) => <Message {...message} />)
      }
      
      </ol>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" name='myMessage' placeholder='Write a message...'/>
        <button type='submit'> 
          <MdSend />
        </button>
      </form>
    </div>
  )
}
