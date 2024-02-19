import { useForm, Controller } from "react-hook-form";
import InputElement from "../Utils/Elements/inputs-elements/InputElement";
import SelectElement from "../Utils/Elements/select-elements/SelectElement";
import CheckBoxElement from "../Utils/Elements/checkbox-elements/CheckBoxElement";
import RadioElement from "../Utils/Elements/radio-elements/RadioElement";
import TextareaElement from "../Utils/Elements/inputs-elements/TextareaElement";
import { useEffect } from "react";

export function useCustomForm(apiData) {
  const { handleSubmit, formState, control, watch, setValue } = useForm({
    mode: "all",
    defaultValues: apiData,
  });

  useEffect(() => {
    // Set default values when apiData changes
    if (apiData) {
      Object.entries(apiData).forEach(([name, value]) => {
        setValue(name, value);
      });
    }
  }, [apiData, setValue]);

  const renderInput = (input, dynamicData) => {
    let InputComponent, specificProps;
    let defaultValues = apiData[input.name];
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
          defaultValue: defaultValues || "",
        };
        break;
      case "textarea":
        InputComponent = TextareaElement;
        specificProps = {
          inputDesign: "inputDesign",
          inputPadding: "input_Padding",
          inputplaceholder: input.placeholder,
          inputContainer: "block_container",
          inputLabel: input.label,
          lableStyle: "lable_style",
          defaultValue: defaultValues || "",
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
      case "apiSelectList":
        InputComponent = SelectElement;
        specificProps = {
          selectOptions: dynamicData.map((item) => item[input.name]) || [
            "create data for this filed",
          ],
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
          defaultValue: defaultValues || [],
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
          inputContainer: "inlineRadio_container",
          defaultValue: defaultValues || "",
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
        defaultValue={apiData[input.name]}
        rules={input.validation}
        render={({ field }) => (
          <InputComponent {...input} {...field} {...specificProps} />
        )}
      />
    );
  };

  return {
    handleSubmit,
    formState,
    control,
    watch,
    setValue,
    renderInput,
  };
}
