import Cell from "./Cell";
import styles from "./InputPad.module.css";

function InputPad() {
  return (
    <div className={`${styles.Container} container`}>
      <div className="row">
        <div className={`${styles.col} col`}>
          <Cell value="AC" />
        </div>
        <div className={`${styles.col} col`}>
          <Cell value="C" />
        </div>
        <div className={`${styles.col} col`}>
          <Cell value="%" />
        </div>
        <div className={`${styles.col} col`}>
          <Cell value="÷" />
        </div>
      </div>
      <div className="row">
        <div className={`${styles.col} col`}>
          <Cell value="7" />
        </div>
        <div className={`${styles.col} col`}>
          <Cell value="8" />
        </div>
        <div className={`${styles.col} col`}>
          <Cell value="9" />
        </div>
        <div className={`${styles.col} col`}>
          <Cell value="×" />
        </div>
      </div>
      <div className="row">
        <div className={`${styles.col} col`}>
          <Cell value="4" />
        </div>
        <div className={`${styles.col} col`}>
          <Cell value="5" />
        </div>
        <div className={`${styles.col} col`}>
          <Cell value="6" />
        </div>
        <div className={`${styles.col} col`}>
          <Cell value="-" />
        </div>
      </div>
      <div className="row">
        <div className={`${styles.col} col`}>
          <Cell value="1" />
        </div>
        <div className={`${styles.col} col`}>
          <Cell value="2" />
        </div>
        <div className={`${styles.col} col`}>
          <Cell value="3" />
        </div>
        <div className={`${styles.col} col`}>
          <Cell value="+" />
        </div>
      </div>
      <div className="row">
        <div className={`${styles.col} col`}>
          <Cell value="" />
        </div>
        <div className={`${styles.col} col`}>
          <Cell value="0" />
        </div>
        <div className={`${styles.col} col`}>
          <Cell value="." />
        </div>
        <div className={`${styles.col} col`}>
          <Cell value="=" />
        </div>
      </div>
    </div>
  );
}

export default InputPad;
