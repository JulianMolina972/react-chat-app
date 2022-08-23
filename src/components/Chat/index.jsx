import React from 'react'
import { useParams } from "react-router-dom"
import { Message } from "../Message"

export const Chat = () => {
  const { id } = useParams()

  return (
    <div>
      <p>
        Chat with id {id}
      </p>
      <ol>
        <Message text="Hello" hour="10:00" sender={true} />
        <Message text="Hello world" hour="10:09" sender={false} />
      </ol>
    </div>
  )
}
