import styles from '../styles/AppWrapper.module.css';

const AppWrapper = ({ children }) => {
  return (
    <body className={styles.body}>
      {children}
    </body>
  );
}

export default AppWrapper;
