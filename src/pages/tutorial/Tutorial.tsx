import { tutorialList } from "../../constants";
import s from "./Tutorial.module.scss";

const Tutorial = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.title}>Tutorial</div>
      <div className={s.label}>Gestures:</div>
      <div className={s.gestures}>
        {tutorialList.map((t) => (
          <div className={s.gesture}>
            <div className={s.label}>{t.label}</div>
            <div className={s.text}>{t.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tutorial;
