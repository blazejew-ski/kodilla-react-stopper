import styles from './app.module.scss'
import Timer from './components/Timer/Timer.js';


const App = () => {
  return (
    <div className={styles.wrapper}>
      <Timer/>
    </div>
  );
};

export default App;