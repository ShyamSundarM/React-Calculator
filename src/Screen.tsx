import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./Screen.module.css";
import { useSelector } from "react-redux";
import { RootState } from "./store/Store";
function Screen() {
  const ScreenData = useSelector((s: RootState) => s.ScreenData);
  return (
    <>
      <div className={`${styles.Screen}`}>{ScreenData}</div>
    </>
  );
}

export default Screen;
