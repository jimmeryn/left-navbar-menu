import * as React from "react";

import { ExpansionPanelDetails } from "@material-ui/core";

import CheckboxComponent from "./CheckboxComponent";
import ImageButtonComponent from "./ImageButtonComponent";
import ComboboxComponent from "./ComboboxComponent";
import TextInputComponent from "./TextInputComponent";

import { IDataElement } from "../store/data/types";
import { ChangeButtonIndex } from "../components/FunctionTypes";
import { IGroupProps } from "./GroupComponent";

const renderComponent = (
  elementIndex: number,
  elementOfData: IDataElement,
  buttonIndex: number,
  changeButtonIndex: ChangeButtonIndex,
  {
    updatePropertyValue,
    addComboboxOption,
    setHoverButton,
    pictureState,
    setPictureState
  }: IGroupProps
) => (
  <ExpansionPanelDetails key={elementIndex}>
    {(() => {
      switch (elementOfData.type) {
        case "text":
          return (
            <TextInputComponent
              updatePropertyValue={updatePropertyValue}
              elementIndex={elementIndex}
              label={elementOfData.label}
              value={elementOfData.value}
            />
          );
        case "checkbox":
          return (
            <CheckboxComponent
              elementIndex={elementIndex}
              label={elementOfData.label}
              updatePropertyValue={updatePropertyValue}
              value={elementOfData.value}
            />
          );
        case "combobox":
          return (
            <ComboboxComponent
              addComboboxOption={addComboboxOption}
              updatePropertyValue={updatePropertyValue}
              elementIndex={elementIndex}
              label={elementOfData.label}
              options={elementOfData.options}
              value={elementOfData.value}
            />
          );
        default:
          return null;
      }
    })()}
    <div onClick={() => changeButtonIndex(elementIndex)}>
      <ImageButtonComponent
        image={elementOfData.image}
        buttonIndex={buttonIndex}
        elementIndex={elementIndex}
        setHoverButton={setHoverButton}
        pictureState={pictureState}
        setPictureState={setPictureState}
      />
    </div>
  </ExpansionPanelDetails>
);
export default renderComponent;
