import * as React from "react";
import { MenuItem, Paper } from "@material-ui/core";
import {
  AddComboboxOption,
  ChangeIsComboboxOpen,
  UpdatePropertyValue,
  OptionClick
} from "./FunctionTypes";

interface IOptionProps {
  addComboboxOption: AddComboboxOption;
  changeIsComboboxOpen: ChangeIsComboboxOpen;
  updatePropertyValue: UpdatePropertyValue;
  onClick: OptionClick;
  elementIndex: number;
  options?: string[];
  setHover: React.Dispatch<React.SetStateAction<boolean>>;
}

const OptionsComponent: React.FunctionComponent<IOptionProps> = (
  props: IOptionProps
) => {
  const renderSuggestion = (
    elementIndex: number,
    onClick: OptionClick,
    option: string
  ) => (
    <MenuItem
      key={option}
      component="div"
      button={true}
      onClick={(event: React.MouseEvent) =>
        onClick(event, elementIndex, option)
      }
      onMouseEnter={() => props.setHover(true)}
      onMouseLeave={() => props.setHover(false)}
    >
      {option}
    </MenuItem>
  );

  return (
    <div className="comboboxOptionField">
      <Paper>
        {props.options.length > 0 &&
          props.options.map((option: string) =>
            renderSuggestion(props.elementIndex, props.onClick, option)
          )}
      </Paper>
    </div>
  );
};

export default OptionsComponent;
