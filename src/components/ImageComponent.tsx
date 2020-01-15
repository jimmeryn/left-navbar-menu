import * as React from "react";

const classNames = require("classnames");

interface IImageProps {
  hoverButton: boolean;
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

const ImageComponent: React.FunctionComponent<IImageProps> = (
  props: IImageProps
) => {
  const imgClass = classNames("picture", [
    { show: props.pictureState.visable }
  ]);

  const handleMouseClick = (event: MouseEvent) => {
    const { className } = event.target as HTMLDivElement;
    if (
      !props.hoverButton &&
      (props.pictureState.visable && className !== "picture show")
    ) {
      props.setPictureState({
        src: props.pictureState.src,
        visable: false
      });
    }
  };

  React.useEffect(() => {
    window.addEventListener("mousedown", handleMouseClick);
    return () => {
      window.removeEventListener("mousedown", handleMouseClick);
    };
  }, [handleMouseClick]);

  return (
    <div className="pictureContainer">
      {props.pictureState.src != null && (
        <img src={props.pictureState.src} alt="logo1" className={imgClass} />
      )}
    </div>
  );
};

export default ImageComponent;
