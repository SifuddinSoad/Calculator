import styles from "./Button.module.css";

const Button = ({ buttonName, onClickHandle }) => {
  return (
    <div className={styles.buttoncont}>
      <button
        type="button"
        className={`${styles.btnstyle} btn btn-dark`}
        onClick={() => onClickHandle(buttonName)}
      >
        {buttonName}
      </button>
    </div>
  );
};
export default Button;
