import * as React from "react";

import ComboboxInputComponent from "./ComboboxInputComponent";
import OptionsComponent from "./OptionsComponent";
import { AddComboboxOption, ChangeIsComboboxOpen } from "./FunctionTypes";
import { ITextProps } from "./TextInputComponent";

export interface IComboboxProps extends ITextProps {
  addComboboxOption: AddComboboxOption;
  options?: string[];
}

const ComboboxComponent: React.FunctionComponent<IComboboxProps> = (
  props: IComboboxProps
) => {
  const [isComboboxOpen, changeIsComboboxOpen] = React.useState(false);
  const [inputText, setInputText] = React.useState("");
  const [hoverOption, setHover] = React.useState(false);

  const onOptionClick = (
    event: React.MouseEvent,
    elementIndex: number,
    option: string
  ) => {
    event.preventDefault();
    props.updatePropertyValue(elementIndex, option);
    setInputText(option);
    changeIsComboboxOpen(false);
    setHover(false);
  };

  const handleOnBlurCombobox = (
    inputText: string,
    changeIsComboboxOpen: ChangeIsComboboxOpen,
    { elementIndex, updatePropertyValue, addComboboxOption }: IComboboxProps
  ) => {
    setInputText(inputText.trim());
    if (inputText != null && inputText.length > 0 && !hoverOption) {
      updatePropertyValue(elementIndex, inputText);
      addComboboxOption(elementIndex, inputText);
      changeIsComboboxOpen(false);
    }
    if (inputText.length === 0 && !hoverOption) {
      changeIsComboboxOpen(false);
    }
  };

  return (
    <div
      className="combobox"
      onBlur={() =>
        handleOnBlurCombobox(inputText, changeIsComboboxOpen, props)
      }
    >
      <ComboboxInputComponent
        addComboboxOption={props.addComboboxOption}
        changeIsComboboxOpen={changeIsComboboxOpen}
        updatePropertyValue={props.updatePropertyValue}
        elementIndex={props.elementIndex}
        label={props.label}
        value={props.value}
        inputText={inputText}
        setInputText={setInputText}
      />
      {isComboboxOpen ? (
        <OptionsComponent
          addComboboxOption={props.addComboboxOption}
          changeIsComboboxOpen={changeIsComboboxOpen}
          updatePropertyValue={props.updatePropertyValue}
          onClick={onOptionClick}
          elementIndex={props.elementIndex}
          options={props.options}
          setHover={setHover}
        />
      ) : null}
    </div>
  );
};

export default ComboboxComponent;
