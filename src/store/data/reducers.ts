import {
  IData,
  ADD_COMBOBOX_OPTION,
  UPDATE_PROPERTY_VALUE,
  ActionTypes
} from "./types";

const initialState: IData = {
  properties: require("../data.json").properties
  // TODO: get normalized state
};

const reducer = (state: IData = initialState, action: ActionTypes): IData => {
  switch (action.type) {
    case UPDATE_PROPERTY_VALUE:
      return typeof action.payload.newValue === "string" ||
        typeof action.payload.newValue === "boolean"
        ? {
            properties: state.properties.map((element, idx) =>
              idx === action.payload.index
                ? { ...element, value: action.payload.newValue }
                : element
            )
          }
        : this.state;

    case ADD_COMBOBOX_OPTION:
      return {
        properties: state.properties.map((element, idx) => {
          return idx === action.payload.index &&
            !element.options.find(e => e === action.payload.newOption)
            ? {
                ...element,
                options: element.options
                  .reverse()
                  .concat(action.payload.newOption.toString())
                  .reverse()
              }
            : element;
        })
      };

    default:
      return state;
  }
};

export default reducer;
