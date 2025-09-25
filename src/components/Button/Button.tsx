import {Button as ChakraButton, type ButtonProps} from "@chakra-ui/react";
import "./Button.css"

const Button = (props: ButtonProps) => {
  return <ChakraButton {...props} />
};

export default Button;