import * as React from "react";
import { TextField } from "@material-ui/core";
import { UpdatePropertyValue, SetInputText } from "./FunctionTypes";

export interface ITextProps {
  updatePropertyValue: UpdatePropertyValue;
  elementIndex: number;
  label: string;
  value: string | boolean;
}
export interface ITextState {
  inputText: string;
}

export const handleInput = (
  event: React.ChangeEvent<HTMLInputElement>,
  setInputText: SetInputText
) => {
  event.preventDefault();
  setInputText(event.target.value);
};

const handleEnterText = (
  idx: number,
  event: React.KeyboardEvent,
  inputText: string,
  updatePropertyValue: UpdatePropertyValue
) => {
  if (event.key === "Enter" && inputText != null && inputText.length > 0) {
    updatePropertyValue(idx, inputText.trim());
  }
};

const handleOnBlurText = (
  idx: number,
  inputText: string,
  updatePropertyValue: UpdatePropertyValue
) => {
  if (inputText != null && inputText.length > 0) {
    updatePropertyValue(idx, inputText.trim());
  }
};

const TextInputComponent: React.FunctionComponent<ITextProps> = (
  props: ITextProps
) => {
  const [inputText, setInputText] = React.useState("");

  return (
    <TextField
      fullWidth={true}
      value={inputText}
      label={props.label}
      placeholder={props.value.toString()}
      onBlur={() =>
        handleOnBlurText(
          props.elementIndex,
          inputText,
          props.updatePropertyValue
        )
      }
      onKeyPress={(event: React.KeyboardEvent<Element>) =>
        handleEnterText(
          props.elementIndex,
          event,
          inputText,
          props.updatePropertyValue
        )
      }
      onInput={(event: React.ChangeEvent<HTMLInputElement>) =>
        handleInput(event, setInputText)
      }
    />
  );
};

export default TextInputComponent;
