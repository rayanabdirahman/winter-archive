import { AvatarProps, Avatar as CUAvatar } from "@chakra-ui/react";
import React from "react";

type Props = AvatarProps;

const Avatar: React.FC<Props> = (props) => <CUAvatar {...props} />;

export default Avatar;
