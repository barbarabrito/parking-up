import styles from './Message.module.css';
import { useEffect, useState } from 'react';
import bus from '../../services/bus';

function Message() {

  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState('');

  useEffect(() => {
    bus.addListener("flash", ({ message, type }) => {
      setIsVisible(true);
      setMessage(message);
      setType(type);
      setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    });
  }, []);

  return (
    isVisible && (
      <div className={`${styles.message} ${styles[type]}`}>{message}</div>
    )
  );
}
export default Message;