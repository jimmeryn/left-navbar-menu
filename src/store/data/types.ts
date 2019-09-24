export interface IDataElement extends Array<any> {
  readonly label: string;
  value: string | boolean;
  readonly type: string;
  readonly group: string;
  options?: String[];
  readonly image?: string;
}

export interface IData {
  properties: IDataElement[];
}

// Describing the diffrent ACTION NAMES available
export const CHANGE_TEXT_VALUE = "CHANGE_TEXT_VALUE";
export const CHANGE_BOOL_VALUE = "CHANGE_CHECKBOX_VALUE";
export const ADD_COMBOBOX_OPTION = "ADD_COMBOBOX_OPTION";

interface ChangeTextValueAction {
  type: typeof CHANGE_TEXT_VALUE;
  payload: {
    index: number;
    newValue: string | boolean;
  };
}

interface ChangeBoolValueAction {
  type: typeof CHANGE_BOOL_VALUE;
  payload: {
    index: number;
  };
}

interface AddComboboxOptionAction {
  type: typeof ADD_COMBOBOX_OPTION;
  payload: {
    index: number;
    newOption: string | boolean;
  };
}

export type ActionTypes =
  | ChangeTextValueAction
  | ChangeBoolValueAction
  | AddComboboxOptionAction;
