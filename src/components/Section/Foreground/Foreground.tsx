import {Box, type BoxProps, Center, type CenterProps} from "@chakra-ui/react";
import {clsx} from "clsx";
import "./Foreground.css"

const Foreground = ({className, ...props}: CenterProps) => {
  return (
    <Center className={clsx("foreground font-bold", className)} {...props} />
  );
};

export const ForegroundContent = ({className, ...props}: BoxProps) => {
  return (
    <Box className={clsx("foreground-content", className)} {...props} />
  );
};

Foreground.Content = ForegroundContent

export default Foreground;