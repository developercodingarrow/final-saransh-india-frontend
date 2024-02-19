import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import styles from "./css/chipInput.module.css";
import SubmitBtn from "../buttonsElements/SubmitBtn";

const ChipInput = (props) => {
  const { title, handeSubmit, dataFor, updateFiled, apiData } = props;
  const [inputValue, setInputValue] = useState("");
  console.log(apiData); // real estate, property, gurgaon
  const [chips, setChips] = useState([]);

  useEffect(() => {
    // If apiData is available, split it into chips and setChips state
    if (apiData) {
      const apiChips = apiData.split(", ").map((chip) => chip.trim());
      setChips(apiChips);
    }
  }, [apiData]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();
      setChips([...chips, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleChipRemove = (index) => {
    const updatedChips = [...chips];
    updatedChips.splice(index, 1);
    setChips(updatedChips);
  };
  const chipsString = chips.map((chip) => `${chip}`).join(", ");

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await handeSubmit({ [updateFiled]: chipsString }, dataFor);
      console.log(res);
      if (res.data.status === "success") {
        toast.success("succes");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.card_wrapper}>
      <Toaster />
      <div className={styles.card_titleBox}>
        <p>{title}</p>
      </div>
      <div className={styles.card}>
        <div className={styles.card_body}>
          <form onSubmit={handelSubmit}>
            <div className={styles.inputContainer}>
              {chips.map((chip, index) => (
                <div key={index} className={styles.chip}>
                  {chip}
                  <span
                    className={styles.removeIcon}
                    onClick={() => handleChipRemove(index)}
                  >
                    &#10006;
                  </span>
                </div>
              ))}
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
                placeholder="Type and press Enter"
                className={styles.input}
              />
            </div>
            <div className={styles.submitBtn_wrapper}>
              <SubmitBtn
                text="submit"
                buttonstyle="fullWidthBtn"
                btnColor="primaryBtnColor"
                btnSze="fullWidthBtnSize"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChipInput;
