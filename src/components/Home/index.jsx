import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'

export const Home = () => {

  const [id, setId] = useState("")
  
  const numberRef = useRef();
  
  useEffect(() => {
    numberRef.current = Math.floor(Math.random() * 9999);
    
  }, [])

  const handleChange = (event) => {
    setId(event.target.value)
  }

  return (
    <main className={styles.home}>
      <div className={styles.information}>
        <h1>PlatziChat</h1>
        <input 
          type="text" 
          name='' 
          id=''  
          placeholder='write an id' 
          onChange={handleChange}  
        />
        <Link to={`/chat/${id}`}>
          <button>Go to chat</button>
        </Link>
        <p>
          I suggest you to enter the chat: {numberRef.current}
        </p>
      </div>
    </main>
  )
}

