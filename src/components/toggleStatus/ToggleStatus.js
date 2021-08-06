import React, { useState } from "react";
import { Lock, Unlock } from "react-feather";
import "./ToggleStatus.scss";

const ToggleCheckBox = ({ id, state }) => {
  const boolState = state === "locked" ? true : false;
  const [isChecked, setIsChecked] = useState(boolState);
  const [status, setStatus] = useState(state);
  const updateLockHandler = () => {
    const status = isChecked === true ? "unlocked" : "locked";
    setStatus(status);
    setIsChecked(!isChecked);
  };

  const icon = isChecked === true ? <Lock size={21} /> : <Unlock size={21} />;

  return (
    <div className="statusContent">
      <label className="switch">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => updateLockHandler()}
        />
        <span className="slider round"></span>
      </label>
      <span
        className={`stateText ${isChecked === true ? "greenText" : "redText"}`}
      >
        {icon}
        <span>{status}</span>
      </span>
    </div>
  );
};

export default ToggleCheckBox;
