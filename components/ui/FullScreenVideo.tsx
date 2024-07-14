
import React from "react";

interface ExtendedVideoProps
  extends React.VideoHTMLAttributes<HTMLVideoElement> {
  id: string;
}

const Video: React.FC<ExtendedVideoProps> = ({
  id,
  src,
  className,
  ...rest
}) => (
  <video id={id} src={src} className={className} controls {...rest}>
    Your browser does not support the video tag.
  </video>
);

export default Video;
