import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles['home-container']}>
      <h1>Welcome to The Outlet!</h1>
      <p>Where <i>high</i> fashion meets <i>low</i> prices</p>
    </div>
  )
}
export default Home;