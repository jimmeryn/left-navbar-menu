import * as React from "react";
import { connect } from "react-redux";
import { addComboboxOption, updatePropertyValue } from "../store/data/actions";

import {
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { IDataElement } from "../store/data/types";
import { UpdatePropertyValue, AddComboboxOption } from "./FunctionTypes";

import renderComponent from "./RenderComponent";

export interface IGroupProps {
  dataElement: IDataElement[];
  updatePropertyValue: UpdatePropertyValue;
  addComboboxOption: AddComboboxOption;
  setHoverButton: React.Dispatch<React.SetStateAction<boolean>>;
  pictureState: {
    src: null | string;
    visable: boolean;
  };
  setPictureState: React.Dispatch<
    React.SetStateAction<{
      src: null | string;
      visable: boolean;
    }>
  >;
}

const getGroupNames = (data: IDataElement[]): Array<string> => {
  return data.reduce(
    (groupNamesArray: string[], currentElement: IDataElement) =>
      groupNamesArray.indexOf(currentElement.group) === -1
        ? groupNamesArray.concat([currentElement.group])
        : groupNamesArray,
    []
  );
};

class GroupComponent extends React.Component<
  IGroupProps,
  { buttonIndex: number }
> {
  constructor(props: IGroupProps) {
    super(props);
    this.state = {
      buttonIndex: -1
    };
  }

  changeButtonIndex = (newButtonIndex: number) => {
    this.setState({ buttonIndex: newButtonIndex });
  };

  render() {
    return (
      <div>
        {getGroupNames(this.props.dataElement).map((groupName: string) => (
          <ExpansionPanel key={parseInt(groupName.replace(/\D/gi, ""))}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" noWrap>
                {groupName}
              </Typography>
            </ExpansionPanelSummary>
            {this.props.dataElement.map(
              (elementOfData: IDataElement, elementIndex: number) =>
                elementOfData.group === groupName
                  ? renderComponent(
                      elementIndex,
                      elementOfData,
                      this.state.buttonIndex,
                      this.changeButtonIndex,
                      this.props
                    )
                  : null
            )}
          </ExpansionPanel>
        ))}
      </div>
    );
  }
}

export default connect(
  null,
  {
    addComboboxOption,
    updatePropertyValue
  }
)(GroupComponent);
