import { Link } from 'react-router-dom';
import styles from './ErrorPage.module.css'

const ErrorPage = () => {
  return (
    <div className={styles['error-container']}>
      <h1>Oh no! This route doesn&apos;t work</h1>
        <Link to='/' className={styles['home-link']}>
          To go home, click here!
        </Link>
    </div>
  )
}
export default ErrorPage;