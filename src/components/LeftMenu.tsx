import * as React from "react";
import { useSelector } from "react-redux";
import { LeftMenuState } from "../store";
import GroupComponent from "../components/GroupComponent";
import ImageComponent from "../components/ImageComponent";

const LeftMenu: React.FunctionComponent = () => {
  const dataElement = useSelector(
    (state: LeftMenuState) => state.reducer.properties
  );
  const [hoverButton, setHoverButton] = React.useState(false);
  const [pictureState, setPictureState] = React.useState({
    src: null,
    visable: false
  });

  return (
    <div className="NavBar-left">
      <GroupComponent
        dataElement={dataElement}
        setHoverButton={setHoverButton}
        pictureState={pictureState}
        setPictureState={setPictureState}
      />
      <ImageComponent
        hoverButton={hoverButton}
        pictureState={pictureState}
        setPictureState={setPictureState}
      />
    </div>
  );
};

export default LeftMenu;
