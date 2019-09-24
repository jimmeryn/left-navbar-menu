import * as React from "react";
import "./styles/style.css";
import {
  Button,
  Checkbox,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Paper,
  TextField,
  Typography
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ImageIcon from "@material-ui/icons/Image";

import { connect } from "react-redux";
import { AppState } from "./store";
import { IDataElement } from "./store/data/types";
import {
  addComboboxOption,
  changeBoolValue,
  changeTextValue
} from "./store/data/actions";

interface State {
  displayedPicture: string | undefined;
  showPicture: boolean;
  pictureOpacity: number;
  isComboboxOpen: boolean;
}

interface Props {
  properties: IDataElement;
  addComboboxOption: typeof addComboboxOption;
  changeBoolValue: typeof changeBoolValue;
  changeTextValue: typeof changeTextValue;
}

class App extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      displayedPicture: undefined,
      showPicture: false,
      pictureOpacity: 0,
      isComboboxOpen: false
    };
  }

  _onPictureButtonClick = (element: IDataElement) => {
    const image = element.image;
    if (!this.state.showPicture) {
      this.setState({ displayedPicture: image, showPicture: true });
    } else if (
      this.state.showPicture &&
      this.state.displayedPicture === image
    ) {
      this.setState({ showPicture: false });
    }
  };

  _handleEnterText = (idx: number, e: any) => {
    if (
      e.key === "Enter" &&
      e.target.value != null &&
      e.target.value.length > 0
    ) {
      this.props.changeTextValue(idx, e.target.value);
      e.target.value = "";
    }
  };

  _handleOnBlurText = (idx: number, e: any) => {
    if (e.target.value != null && e.target.value.length > 0) {
      this.props.changeTextValue(idx, e.target.value);
    }
    e.target.value = "";
  };

  _openComboboxOptions = () => this.setState({ isComboboxOpen: true });

  _handleEnterCombobox = (idx: number, e: any) => {
    if (
      e.key === "Enter" &&
      e.target.value != null &&
      e.target.value.length > 0
    ) {
      this.props.changeTextValue(idx, e.target.value);
      this.props.addComboboxOption(idx, e.target.value);
      this.setState({ isComboboxOpen: false });
      e.target.value = "";
    }
    if (e.key === "Escape") {
      this.setState({ isComboboxOpen: false });
    }
  };

  _handleOnBlurCombobox = (idx: number, e: any) => {
    if (e.target.value != null && e.target.value.length > 0) {
      this.props.changeTextValue(idx, e.target.value);
      this.props.addComboboxOption(idx, e.target.value);
      this.setState({ isComboboxOpen: false });
    }
    e.target.value = "";
  };

  _handleOptionClick = (elementNumber: number, option: string) => {
    this.props.changeTextValue(elementNumber, option);
    this.setState({ isComboboxOpen: false });
  };

  _renderSuggestion = (
    option: string,
    elementIndex: number,
    onClick: Function
  ) => {
    return (
      <MenuItem
        key={option}
        component="div"
        button={true}
        onClick={onClick.bind(this, elementIndex, option)}
      >
        {option}
      </MenuItem>
    );
  };

  _onCheckboxChange = (idx: number) => this.props.changeBoolValue(idx);

  _renderButton = (dataElement: IDataElement) => {
    return (
      <Button onClick={() => this._onPictureButtonClick(dataElement)}>
        <ImageIcon />
      </Button>
    );
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">Left Menu App</header>

        <div className="Container">
          <div className="NavBar-left">
            {this.props.properties
              .reduce(
                (groupNamesArray: string[], currentElement: IDataElement) =>
                  groupNamesArray.indexOf(currentElement.group) === -1
                    ? groupNamesArray.concat([currentElement.group])
                    : groupNamesArray,
                []
              )
              .map((groupName: string) => (
                <ExpansionPanel key={parseInt(groupName.replace(/\D/gi, ""))}>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography style={{ whiteSpace: "nowrap" }}>
                      {groupName}
                    </Typography>
                  </ExpansionPanelSummary>
                  {this.props.properties.map(
                    (elementOfData: IDataElement, elementIndex: number) => {
                      if (elementOfData.group === groupName) {
                        switch (elementOfData.type) {
                          case "text":
                            return (
                              <ExpansionPanelDetails key={elementIndex}>
                                <FormControl style={{ width: "100%" }}>
                                  <InputLabel
                                    shrink
                                    htmlFor="age-native-label-placeholder"
                                  >
                                    {elementOfData.label}
                                  </InputLabel>
                                  <TextField
                                    helperText={elementOfData.value}
                                    onBlur={this._handleOnBlurText.bind(
                                      this,
                                      elementIndex
                                    )}
                                    onKeyDown={this._handleEnterText.bind(
                                      this,
                                      elementIndex
                                    )}
                                  />
                                </FormControl>
                                {elementOfData.image &&
                                  this._renderButton(elementOfData)}
                              </ExpansionPanelDetails>
                            );

                          case "checkbox":
                            return (
                              <ExpansionPanelDetails key={elementIndex}>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={
                                        typeof elementOfData.value === "boolean"
                                          ? elementOfData.value
                                          : null
                                      }
                                      onChange={() =>
                                        this._onCheckboxChange(elementIndex)
                                      }
                                      value="checkedB"
                                      color="primary"
                                      key={0}
                                    />
                                  }
                                  label={elementOfData.label}
                                />
                                {elementOfData.image &&
                                  this._renderButton(elementOfData)}
                              </ExpansionPanelDetails>
                            );

                          case "combobox":
                            return (
                              <ExpansionPanelDetails key={elementIndex}>
                                <FormControl style={{ width: "100%" }}>
                                  <InputLabel
                                    shrink
                                    htmlFor="age-native-label-placeholder"
                                  >
                                    {elementOfData.label}
                                  </InputLabel>
                                  <TextField
                                    helperText={elementOfData.value}
                                    onFocus={this._openComboboxOptions}
                                    onKeyDown={this._handleEnterCombobox.bind(
                                      this,
                                      elementIndex
                                    )}
                                    onBlur={this._handleOnBlurCombobox.bind(
                                      this,
                                      elementIndex
                                    )}
                                  />
                                  {this.state.isComboboxOpen ? (
                                    <Paper
                                      style={{
                                        maxHeight: "30vh",
                                        overflowY: "auto"
                                      }}
                                    >
                                      {elementOfData.options.map(
                                        (option: string) =>
                                          this._renderSuggestion(
                                            option,
                                            elementIndex,
                                            this._handleOptionClick
                                          )
                                      )}
                                    </Paper>
                                  ) : null}
                                </FormControl>
                                {elementOfData.image &&
                                  this._renderButton(elementOfData)}
                              </ExpansionPanelDetails>
                            );
                          default:
                            break;
                        }
                      }
                    }
                  )}
                </ExpansionPanel>
              ))}
          </div>
          <div className="NavBar-center">
            {this.state.displayedPicture !== undefined && (
              <div>
                <img
                  id="picture"
                  src={this.state.displayedPicture}
                  alt="logo1"
                  className={
                    "picture " + (this.state.showPicture ? "show" : "hide")
                  }
                />
              </div>
            )}
          </div>
          <div className="NavBar-right"></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => state.reducer;

export default connect(
  mapStateToProps,
  {
    addComboboxOption,
    changeBoolValue,
    changeTextValue
  }
)(App);
