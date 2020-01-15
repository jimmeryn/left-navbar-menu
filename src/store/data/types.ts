export interface IDataElement {
  readonly label: string;
  value: string | boolean;
  readonly type: string;
  readonly group: string;
  options?: string[];
  readonly image?: string;
}

export interface INormalizedData {
  // do not know number of properties!!
  // [key: string]: {
  //   byLabels: [];
  //   allLabels: [];
  // };
  // groups: [];
}

export interface IData {
  properties: IDataElement[];
}

// Describing different ACTION NAMES available
export const UPDATE_PROPERTY_VALUE = "CHANGE_TEXT_VALUE";
export const ADD_COMBOBOX_OPTION = "ADD_COMBOBOX_OPTION";

interface UpdatePropertyValueAction {
  type: typeof UPDATE_PROPERTY_VALUE;
  payload: {
    index: number;
    newValue: string | boolean;
  };
}

interface AddComboboxOptionAction {
  type: typeof ADD_COMBOBOX_OPTION;
  payload: {
    index: number;
    newOption: string | boolean;
  };
}

export type ActionTypes = UpdatePropertyValueAction | AddComboboxOptionAction;
