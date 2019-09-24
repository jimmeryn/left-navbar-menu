import {
  IData,
  ADD_COMBOBOX_OPTION,
  CHANGE_BOOL_VALUE,
  CHANGE_TEXT_VALUE,
  ActionTypes
} from "./types";

const initialState: IData = {
  properties: require("../data.json").properties
};

const reducer = (state: IData = initialState, action: ActionTypes): IData => {
  switch (action.type) {
    case ADD_COMBOBOX_OPTION:
      return {
        properties: state.properties.map((element, idx) => {
          return idx === action.payload.index &&
            !element.options.find(e => e === action.payload.newOption)
            ? {
                ...element,
                options: element.options.concat(
                  action.payload.newOption.toString()
                )
              }
            : element;
        })
      };
    case CHANGE_BOOL_VALUE:
      return {
        properties: state.properties.map((element, idx) => {
          return idx === action.payload.index
            ? { ...element, value: !element.value }
            : element;
        })
      };
    case CHANGE_TEXT_VALUE:
      return {
        properties: state.properties.map((element, idx) => {
          return idx === action.payload.index
            ? { ...element, value: action.payload.newValue }
            : element;
        })
      };
    default:
      return state;
  }
};

export default reducer;
