import { useDispatch } from "react-redux";
import styles from "./Cell.module.css";
import { ScreenSliceActions } from "./store/ScreenSlice";
import { useEffect, useState } from "react";

type Props = {
  value: string;
};

function Cell(props: Props) {
  const dispatch = useDispatch();
  const [showPressedColor, setShowPressedColor] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPressedColor(false), 100);
    return () => clearTimeout(timer);
  }, [showPressedColor]);

  function CellClickHandler() {
    setShowPressedColor(true);
    dispatch(ScreenSliceActions.SetValue(props.value));
  }
  return (
    <>
      {props.value && (
        <button
          onClick={CellClickHandler}
          className={styles.Root}
          style={{
            backgroundColor: showPressedColor
              ? "#64b484"
              : "rgb(175, 202, 208)",
          }}
        >
          {props.value}
        </button>
      )}
    </>
  );
}
export default Cell;
