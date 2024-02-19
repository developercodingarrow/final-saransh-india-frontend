import React, { useEffect, useState } from "react";
import styles from "./css/switchBtn.module.css";
import toast, { Toaster } from "react-hot-toast";
export default function SwitchBtn(props) {
  const { btnSatus, dataId, handelToggel } = props;
  const [isOn, setIsOn] = useState(btnSatus);

  useEffect(() => {
    // Update the state when the btnSatus prop changes
    setIsOn(btnSatus);
  }, [btnSatus]);

  const toggleSwitch = async (dataId) => {
    try {
      const res = await handelToggel(dataId);
      console.log(res.data.status);
      if (res.data.status === "success") {
        setIsOn(!isOn);
        toast.success("update sucessfully");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <Toaster />
      <div
        className={`${
          isOn ? styles.toggle_switch : styles.toggle_switchActive
        } ${isOn ? styles.on : styles.off}`}
        onClick={() => toggleSwitch(dataId)}
      >
        <div className={styles.round_button}></div>
      </div>
    </div>
  );
}
