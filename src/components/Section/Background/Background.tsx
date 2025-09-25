import {Box, type BoxProps} from "@chakra-ui/react";
import "./Background.css"
import clsx from "clsx"

const Background = ({className, ...props}: BoxProps) => {
  return (
    <Box className={clsx("background", className)} {...props} />
  )
};

export default Background;