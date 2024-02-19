import React from "react";
import { useForm, Controller } from "react-hook-form";
import InputElement from "../Utils/Elements/inputs-elements/InputElement";
import CheckBoxElement from "../Utils/Elements/checkbox-elements/CheckBoxElement";
import RadioElement from "../Utils/Elements/radio-elements/RadioElement";
import SelectElement from "../Utils/Elements/select-elements/SelectElement";

export default function useCustomeAuthFormLogic(customeInputs, formType) {
  const {
    handleSubmit,
    formState, // Include formState here
    control,
    watch,
    setValue,
  } = useForm({
    mode: "all",
  });

  let updatedInputs = [...customeInputs]; // Create a new array to avoid direct manipulation

  if (formType === "SINGUP") {
    updatedInputs = [
      ...updatedInputs,
      {
        id: 5,
        name: "passwordConfirm",
        type: "text",
        placeholder: "password Confirm",
        // label: "Confirm Email",
        validation: {
          required: "Confirm Password is required.",
          validate: (value) =>
            value === watch("password") || "Password do not match.",
        },
      },
    ];
  } else if (formType === "RESETPASSWORD") {
    updatedInputs = [
      ...updatedInputs,
      {
        id: 5,
        name: "passwordConfirm",
        type: "text",
        placeholder: "Re-Enter New Password",
        // label: "Confirm Email",
        validation: {
          required: "Confirm Password is required.",
          validate: (value) =>
            value === watch("password") || "Password do not match.",
        },
      },
    ];
  }

  const renderInput = (input) => {
    let InputComponent, specificProps;
    switch (input.type) {
      case "text":
        InputComponent = InputElement;
        specificProps = {
          inputDesign: "inputDesign",
          inputPadding: "input_Padding",
          inputplaceholder: input.placeholder,
          inputContainer: "block_container",
          inputLabel: input.label,
          lableStyle: "lable_style",
          // Add specific props for InputSecond
        };
        break;
      case "select":
        InputComponent = SelectElement;
        specificProps = {
          selectOptions: input.options || [],
          inputLabel: input.label,
          lableStyle: "lable_style",
          inputContainer: "block_container",
        };
        break;
      case "checkbox":
        InputComponent = CheckBoxElement;
        specificProps = {
          checkBoxOptions: input.options,
          inputLabel: input.label,
          onChange: (selectedOptions) => setValue(input.name, selectedOptions), // Update the form value
          checkBoxStyle: "inLine_customCheckbox_wrapper",
          checkBoxContainerStyle: "inLine_checkBox_container",
        };
        break;
      case "radio":
        InputComponent = RadioElement;
        specificProps = {
          radioOptions: input.options || [],
          onChange: (selectedOption) => setValue(input.name, selectedOption), // Update the form value
          selectedOption: watch(input.name),
          inputLabel: input.label,
          lableStyle: "lable_style",
          inputContainer: "block_container",
          radiostyle: "inlineRadio_container",
          radioTitleGap: "title_rowGap",
          radio_textgap: "radio_btn_textGap",
          radioOptionBox: "inline_radioOptionBox",
        };
        break;
      default:
        return null;
    }
    return (
      <Controller
        key={input.id}
        name={input.name}
        control={control}
        rules={input.validation}
        render={({ field }) => (
          <InputComponent {...input} {...field} {...specificProps} />
        )}
      />
    );
  };
  return {
    handleSubmit,
    formState, // Ensure formState is included in the returned object
    control,
    watch,
    setValue,
    renderInput,
    updatedInputs,
    isValid: formState.isValid, // Access isValid from formState
    errors: formState.errors,
  };
}
