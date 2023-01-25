import { Input as CUInput, InputProps } from "@chakra-ui/react";
import React from "react";

type Props = InputProps;

const Input: React.FC<Props> = (props) => <CUInput {...props} />;

export default Input;
