import {
  ADD_COMBOBOX_OPTION,
  CHANGE_BOOL_VALUE,
  CHANGE_TEXT_VALUE,
  ActionTypes
} from "./types";

export function changeTextValue(
  index: number,
  newValue: string | boolean
): ActionTypes {
  if (typeof newValue === "string")
    return {
      type: CHANGE_TEXT_VALUE,
      payload: { index, newValue }
    };
}

export function changeBoolValue(index: number): ActionTypes {
  return {
    type: CHANGE_BOOL_VALUE,
    payload: { index }
  };
}

export function addComboboxOption(
  index: number,
  newOption: string | boolean
): ActionTypes {
  if (typeof newOption === "string")
    return {
      type: ADD_COMBOBOX_OPTION,
      payload: { index, newOption }
    };
}
