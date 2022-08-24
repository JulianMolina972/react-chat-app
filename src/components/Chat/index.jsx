import React from 'react'
import useChat  from "../../hooks/useChat"
import { useParams, Link } from "react-router-dom"
import { Message } from "../Message"

import { MdSend, MdKeyboardBackspace } from "react-icons/md"
import { FiInfo } from "react-icons/fi"
import styles from './styles.module.css'

export const Chat = () => {
  const { id } = useParams()


  const { messages, sendMessage } = useChat(id)
  const currentHour = `${new Date().getHours()}:${new Date().getMinutes()}`
  const handleSubmit = (e) => {
    e.preventDefault()
    const value = e.target.elements.myMessage.value
    if (value.length === 0) {
      alert("Hey write something...")
    } else {
      sendMessage(value)
    }
  }

  return (
    <div className={styles.chat}> 
      <header className={styles.header}>
        <Link to={"/"}>
          <button>
            <MdKeyboardBackspace />
          </button>
        </Link> 

        <p>
          Chat with id:  {id}
        </p>
        <Link to={"./info"}>
          <button>
            <FiInfo />
          </button>

        </Link>
      </header>
      <ol className={styles.messages}> 
      {messages.length === 0 ? 
      <>
        <Message body="Hello" hour={currentHour} sender={true} />
        <Message body="Hello world" hour={currentHour} sender={false} />
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
