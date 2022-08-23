import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'

export const Home = () => {
  const [id, setId] = useState(null)

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
      </div>
    </main>
  )
}

