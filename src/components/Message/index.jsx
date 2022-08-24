import React from 'react'
import styles from "./styles.module.css"

export const Message = ({ body, hour, sender = false }) => {
  return (
    <li className={styles.message}>
      <div className={sender ? styles.sender : styles.receiver}>
        <p>{body}</p>
        <span>{hour}</span>
      </div>
      <select 
        name="" 
        id="" 
        className={sender 
          ? `${styles.select} ${styles.selectSender}` 
          : `${styles.select} ${styles.selectReceiver}`}
      >
        <option value="">...</option>
        <option value="">Edit</option>
        <option value="">Delete</option>
      </select>
    </li>
  )
}
