import * as React from "react";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import { UpdatePropertyValue } from "./FunctionTypes";

interface ICheckboxProps {
  elementIndex: number;
  label: string;
  updatePropertyValue: UpdatePropertyValue;
  value: string | boolean;
}

const CheckboxComponent: React.FunctionComponent<ICheckboxProps> = (
  props: ICheckboxProps
) => (
  <FormControlLabel
    control={
      <Checkbox
        checked={typeof props.value === "boolean" ? props.value : null}
        color="primary"
        key={0}
        onChange={
          typeof props.value === "boolean"
            ? () => props.updatePropertyValue(props.elementIndex, !props.value)
            : null
        }
        value="checkedB"
      />
    }
    label={props.label}
  />
);

export default CheckboxComponent;
