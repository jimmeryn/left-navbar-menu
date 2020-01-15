import * as React from "react";
import { Button } from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";

interface IImageButtonProps {
  image?: string;
  buttonIndex: number;
  elementIndex: number;
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

const getImageTransitionTime = (): number =>
  document.getElementsByClassName("picture")[0]
    ? parseFloat(
        window.getComputedStyle(document.getElementsByClassName("picture")[0])
          .transitionDuration
      ) * 1000
    : 0;

const ImageButtonComponent: React.FunctionComponent<IImageButtonProps> = (
  props: IImageButtonProps
) => {
  const updatePicture = (
    image: string,
    elementIndex: number,
    buttonIndex: number
  ) => {
    const transitionTime = getImageTransitionTime();
    // First render (picture.src from null to some picture)
    if (props.pictureState.src == null) {
      props.setPictureState({ src: image, visable: false });
      setTimeout(() => {
        props.setPictureState({ src: image, visable: true });
      }, transitionTime);
    } else {
      // Further renders
      if (props.pictureState.visable) {
        // Hide and show
        if (elementIndex !== buttonIndex && props.pictureState.src !== image) {
          props.setPictureState({ ...props.pictureState, visable: false });
          setTimeout(() => {
            props.setPictureState({ src: image, visable: true });
          }, 2 * transitionTime);
        } else props.setPictureState({ src: image, visable: false });
      } else {
        props.setPictureState({ src: image, visable: true });
      }
    }
  };

  const renderButton = (image: string) => (
    <Button
      onMouseEnter={() => props.setHoverButton(true)}
      onMouseLeave={() => props.setHoverButton(false)}
      onClick={() =>
        updatePicture(image, props.elementIndex, props.buttonIndex)
      }
    >
      <ImageIcon />
    </Button>
  );

  return (
    <div className="button">{props.image && renderButton(props.image)}</div>
  );
};

export default ImageButtonComponent;
