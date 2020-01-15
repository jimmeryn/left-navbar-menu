import {
  ADD_COMBOBOX_OPTION,
  UPDATE_PROPERTY_VALUE,
  ActionTypes
} from "./types";

export const updatePropertyValue = (
  index: number,
  newValue: string | boolean
): ActionTypes => {
  return {
    type: UPDATE_PROPERTY_VALUE,
    payload: { index, newValue }
  };
};

export const addComboboxOption = (
  index: number,
  newOption: string | boolean
): ActionTypes => {
  if (typeof newOption === "string")
    return {
      type: ADD_COMBOBOX_OPTION,
      payload: { index, newOption }
    };
};
