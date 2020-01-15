import * as React from "react";
import { TextField } from "@material-ui/core";
import { handleInput } from "./TextInputComponent";
import { ChangeIsComboboxOpen } from "./FunctionTypes";
import { IComboboxProps } from "./ComboboxComponent";

interface IComboboxInputProps extends IComboboxProps {
  changeIsComboboxOpen: ChangeIsComboboxOpen;
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
}

const handleEnterText = (
  event: React.KeyboardEvent,
  {
    inputText,
    elementIndex,
    changeIsComboboxOpen,
    addComboboxOption,
    updatePropertyValue
  }: IComboboxInputProps
) => {
  if (event.key === "Enter" && inputText != null && inputText.length > 0) {
    updatePropertyValue(elementIndex, inputText);
    if (changeIsComboboxOpen != null) {
      addComboboxOption(elementIndex, inputText);
      changeIsComboboxOpen(false);
    }
  }
};

const ComboboxInputComponent: React.FunctionComponent<IComboboxInputProps> = (
  props: IComboboxInputProps
) => {
  return (
    <TextField
      fullWidth={true}
      value={props.inputText}
      label={props.label}
      placeholder={props.value.toString()}
      onKeyPress={(event: React.KeyboardEvent<Element>) =>
        handleEnterText(event, props)
      }
      onInput={(event: React.ChangeEvent<HTMLInputElement>) =>
        handleInput(event, props.setInputText)
      }
      onFocus={() => props.changeIsComboboxOpen(true)}
    />
  );
};

export default ComboboxInputComponent;
