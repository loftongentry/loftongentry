import styles from '../styles/AppWrapper.module.css';

const AppWrapper = ({ children }) => {
  return (
    <div className={styles.body}>
      {children}
    </div>
  );
}

export default AppWrapper;
